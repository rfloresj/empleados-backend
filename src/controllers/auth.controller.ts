import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET ?? 'test-secret-key'
const JWT_EXPIRES_IN = '1h'

export const login = async (req: Request, res: Response) => {
	const { email, password } = req.body

	if (email === 'user@test.com' && password === 'password123') {
		const payload = { email }

		const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })

		res.status(200).json({ token })
	} else {
		res.status(401).json({ message: 'Invalid credentials' })
	}
}
