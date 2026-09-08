import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const TO_EMAIL = 'zeeshan@cosmotrace.com';
const CC_EMAIL = 'shamnas@cosmotrace.com';

const requestTypeLabels: Record<string, string> = {
  consultation: 'Request a consultation',
  walkthrough: 'Schedule a facility walkthrough',
  integration: 'Discuss integration requirements',
  pricing: 'Explore scalable pricing models',
};

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  message?: string;
  requestType?: string[];
};

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'Email is not configured.' }, { status: 500 });
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }

  const name = payload.name?.trim() ?? '';
  const email = payload.email?.trim() ?? '';
  const company = payload.company?.trim() ?? '';
  const phone = payload.phone?.trim() ?? '';
  const message = payload.message?.trim() ?? '';
  const requestType = Array.isArray(payload.requestType) ? payload.requestType : [];

  if (!name || !email || !company) {
    return NextResponse.json(
      { error: 'Name, work email, and company are required.' },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 });
  }

  const helpWith = requestType
    .map((id) => requestTypeLabels[id])
    .filter((label): label is string => Boolean(label));

  const from = process.env.RESEND_FROM_EMAIL || 'CosmoTrace CPO <onboarding@resend.dev>';
  const subject = `Consultation request — ${company}`;

  const text = [
    'New consultation request from the CPO website',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company}`,
    `Phone: ${phone || '—'}`,
    `How can we help: ${helpWith.length ? helpWith.join(', ') : '—'}`,
    '',
    'Message:',
    message || '—',
  ].join('\n');

  const html = `
    <h2>New consultation request</h2>
    <p>Submitted from the CosmoTrace CPO website.</p>
    <table cellpadding="6" cellspacing="0">
      <tr><td><strong>Name</strong></td><td>${escapeHtml(name)}</td></tr>
      <tr><td><strong>Email</strong></td><td>${escapeHtml(email)}</td></tr>
      <tr><td><strong>Company</strong></td><td>${escapeHtml(company)}</td></tr>
      <tr><td><strong>Phone</strong></td><td>${escapeHtml(phone || '—')}</td></tr>
      <tr><td><strong>How can we help</strong></td><td>${escapeHtml(helpWith.join(', ') || '—')}</td></tr>
    </table>
    <p><strong>Message</strong></p>
    <p>${escapeHtml(message || '—').replace(/\n/g, '<br />')}</p>
  `;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [TO_EMAIL],
    cc: [CC_EMAIL],
    replyTo: email,
    subject,
    text,
    html,
  });

  if (error) {
    return NextResponse.json(
      { error: 'Unable to send your request. Please try again or email us directly.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
