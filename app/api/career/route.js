import { NextResponse } from "next/server";
import { Agent, setGlobalDispatcher } from "undici";

const { BREVO_API_KEY, RECIPIENT_NAME, RECIPIENT_EMAIL } = process.env

export async function POST(request) {
    try {
        const body = await request.formData()
        const fullName = `${body.get('fName')} ${body.get('lName')}`

        setGlobalDispatcher(new Agent({ connect: { timeout: 20_000 } }));

        const res = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'api-key': BREVO_API_KEY,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                to: [{ name: RECIPIENT_NAME, email: RECIPIENT_EMAIL }],
                sender: { name: fullName, email: body.get('email') },
                subject: 'Digiblend - Careers',
                // attachment: [{ content: body.get('cv'), name: body.get('fileName') }],
                htmlContent: `<p>Name: <strong>${fullName}<strong></p>
            <p>Email: <strong>${body.get('email')}<strong></p>
            <p>Linkedin: <strong>${body.get('linkedin')}<strong></p>
            <p>Message: <strong>${body.get('message')}<strong></p>
            `
            })
        })
        const result = await res.json()
        console.log(result)
        return NextResponse.json({ success: true, result })

    } catch (error) {
        console.log('post request error:: ', error)
    }

}