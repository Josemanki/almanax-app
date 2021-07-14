import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
    return (
        <div>
            Nothing around here, you might want to <Link to="/">Go Home</Link>
        </div>
    )
}
