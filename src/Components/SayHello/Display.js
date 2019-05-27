// @flow
import React from 'react'

type Props = {
  error: string,
  user: {
    name: string,
  },
}

const SayHello = ({ user, error }: Props) => (
  <>
    {error ? (
      <p className="error-message">Something went wrong</p>
    ) : (
      <p>{`Hello ${(user && user.name) || ''} !`}</p>
    )}
  </>
)

export default SayHello
