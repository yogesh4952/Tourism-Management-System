# Premium Routes Vayo Feature: README

## Overview

This document outlines the implementation details for the "Premium Routes Vayo" feature, which focuses on retrieving and managing premium hotel information. It covers cron job scheduling and validation, authentication routes, and the email notification system.

## 1. Cron Job Scheduling and Validation

### Purpose

Cron jobs are used to automate tasks related to premium hotel data, such as:

- **Data Refresh:** Regularly updating premium hotel information from external sources.
- **Report Generation:** Generating daily/weekly reports on premium hotel availability and pricing.
- **Maintenance Tasks:** Performing database maintenance tasks related to premium hotel data.

### Scheduling Format

We use the standard Unix cron string format ( `* * * * *` ) to define job schedules [6]. The five fields represent:

| Field            | Format of valid values               |
| ---------------- | ------------------------------------ |
| Minute           | 0-59                                 |
| Hour             | 0-23                                 |
| Day of the month | 1-31                                 |
| Month            | 1-12 (or JAN to DEC)                 |
| Day of the week  | 0-6 (or SUN to SAT; or 7 for Sunday) |

For example, `0 10 * * *` means the job will run at 10:00 AM every day.

### Validation

It is **crucial** to validate cron expressions to prevent scheduling errors [1]. We employ the following strategies:

- **`cron-validator` Library:** We use the `cron-validator` npm package within our codebase to validate cron expressions before they are saved to the database or used in scheduling [2].

  ```
  npm install cron-validator
  ```

  Usage example:

  ```
  const cron = require('cron-validator');

  if (cron.isValidCron('* * * * *')) {
    // Schedule the job
  } else {
    // Handle the invalid cron expression error
  }
  ```

  You can customize validation options, such as enabling seconds or alias support [2]:

  ```
  cron.isValidCron('* * * * * *', { seconds: true }); // Enable seconds
  cron.isValidCron('* * * * mon', { alias: true });   // Enable aliases for months and weekdays
  ```

- **Online Validators:** We use online tools like Crontab Guru [1][7] ([https://crontab.guru](https://crontab.guru)) to visually confirm the schedule and ensure it matches our intentions.
- **Testing:** After adding a cron job, monitor its execution to confirm it runs at the expected times.

### Common Issues and Troubleshooting

- **Incorrect Syntax:** Double-check the cron expression syntax. Use a validator to identify errors [1][2].
- **Time Zones:** Ensure the server's time zone is correctly configured and that the `TZ` or `CRON_TZ` environment variables are not overriding the system time [1].
- **Permissions:** Verify that the user running the cron job has the necessary permissions to execute the command or script [1]. Specifically, jobs in `/etc/cron.*/` must be owned by `root` [1].
- **Escaping `%`:** If your command string contains a `%` character, escape it with a backslash ( `\%` ) [1].

### Kubernetes CronJobs

If deploying to Kubernetes, consider using Kubernetes CronJobs. Key configurations include:

- **.spec.startingDeadlineSeconds:** Define a deadline for starting the Job. If the Job misses its scheduled time by more than this value, it will be skipped [3].

## 2. Authentication Routes

### Purpose

Authentication routes protect the API endpoints used to manage premium hotel data. This ensures that only authorized users can create, update, or delete premium hotel information.

### Routes

The following authentication routes are implemented:

- **/api/auth/register:** Registers a new user with administrative privileges.
- **/api/auth/login:** Logs in an existing user and returns a JWT (JSON Web Token).
- **/api/auth/protected:** (Middleware) A middleware function (`protectRoute`) verifies the JWT and allows access to protected routes.

### Implementation Details

- **JWT (JSON Web Tokens):** We use JWTs for authentication. Upon successful login, the server returns a JWT to the client. The client then includes this JWT in the `Authorization` header of subsequent requests.
- **`protectRoute` Middleware:** This middleware is applied to all protected routes. It extracts the JWT from the `Authorization` header, verifies its signature, and checks if the token has expired. If the token is valid, the middleware attaches the user object to the request (`req.user`) and calls `next()`. Otherwise, it returns a 401 (Unauthorized) error.
- **bcrypt:** We use `bcrypt` to hash and salt passwords before storing them in the database.
- **Cookie Security:** The JWT is stored in an HTTP-only cookie with `Secure` attribute set to true in production and `SameSite` attribute set to strict or lax.

### Security Considerations

- **Strong Passwords:** Enforce strong password policies during registration.
- **JWT Secret:** Store the JWT secret key (`SECRET_STRING`) securely as an environment variable. Rotate this secret periodically.
- **HTTPS:** Always use HTTPS in production to protect against man-in-the-middle attacks.
- **Input Validation:** Sanitize and validate all user inputs to prevent injection attacks.

## 3. Mail System for Premium Hotel Notifications

### Purpose

The mail system sends email notifications related to premium hotels:

- **Account Verification:** Sending OTPs (One-Time Passwords) to verify user email addresses during registration.
- **Alerts:** Sending alerts when new premium hotels are added, when prices change significantly, or when availability is limited.
- **Reports:** Sending scheduled reports on premium hotel data.

### Implementation Details

- **Nodemailer:** We use Nodemailer to send emails.
- **Transporter Configuration:** The Nodemailer transporter is configured to use a dedicated email sending service (e.g., SendGrid, Mailgun, AWS SES) or Gmail with OAuth2 for better security and reliability.
- **Email Templates:** We use email templates to generate consistent and visually appealing email messages.

### Security Considerations

- **Email Service:** Avoid using Gmail directly in production due to sending limits and security concerns. Use a dedicated email sending service.
- **OAuth2:** Use OAuth2 authentication with Nodemailer for better security and to avoid the "less secure app" issue with Gmail.
- **Input Sanitization:** Sanitize all data used in email content to prevent email injection attacks.
- **Rate Limiting:** Implement rate limiting to prevent abuse of the email sending system.

This `README.md` provides a comprehensive overview of the key components of the "Premium Routes Vayo" feature, emphasizing cron job management, authentication, and email notifications. Remember to adapt this template to your specific implementation details.
