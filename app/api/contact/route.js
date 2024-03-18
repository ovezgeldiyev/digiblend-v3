import { NextResponse } from "next/server";

const { BREVO_API_KEY, RECIPIENT_NAME, RECIPIENT_EMAIL } = process.env

export async function POST(request) {
    try {
        const data = await request.json()

        const fullName = `${data.fName} ${data.lName}`

        const res = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'api-key': BREVO_API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                to: [{ name: RECIPIENT_NAME, email: RECIPIENT_EMAIL }],
                sender: { name: fullName, email: data.email },
                subject: 'Digiblend - Contact',
                htmlContent: `<p>Name: <strong>${fullName}<strong></p>
                <p>Email: <strong>${data.email}<strong></p>
                <p>Organization: <strong>${data.company}<strong></p>
                <p>Message: <strong>${data.message}<strong></p>`
            })
        })
        const result = await res.json()
        return NextResponse.json({ success: true, result })
    } catch (error) {
        console.log('post request error:: ', error)
    }

}