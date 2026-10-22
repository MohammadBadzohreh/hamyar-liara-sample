# Hamyar Liara sample

A dependency-free Node.js demonstration app for controlled deployment and SRE tests.

Run `npm test` for local checks. Set `DEMO_PAYMENT_MODE=sandbox` and run `npm start` for healthy demo payments. No real payment provider is used.

The acceptance workflow checks checkout behavior on main and codex/repair-* branches. No infrastructure or AI secrets are required in GitHub Actions.

Resource scenarios require explicit DEMO_MODE=true and a private DEMO_TOKEN supplied at runtime. Never commit credentials.
