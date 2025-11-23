# Aldo's CloudPRNT Basic

Simple Node.js server for Aldo's kiosk app and Star mC-Print3 using CloudPRNT.

## Endpoints

- `GET /health` → check if the server is alive
- `POST /cloudprnt/order` → the kiosk sends order data here
- `GET /cloudprnt/job` → the printer asks if there is a job to print

## Run locally

```bash
npm install
npm start
