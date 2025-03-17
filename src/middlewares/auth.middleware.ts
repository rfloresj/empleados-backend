import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET ?? 'test-secret-key'

export const verifyToken = (
	req: Request,
	res: Response,
	next: NextFunction,
): void => {
	const authHeader = req.headers.authorization

	if (!authHeader) {
		res.status(401).json({ message: 'No token provided' })
		return
	}

	const token = authHeader.split(' ')[1]

	jwt.verify(token, JWT_SECRET, (err, decoded) => {
		if (err) {
			return res.status(401).json({ message: 'Invalid token' })
		}
		next()
	})
}
