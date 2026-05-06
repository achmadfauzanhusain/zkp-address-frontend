'use client'

import { useAppKit, useAppKitAccount } from '@reown/appkit/react'

const Register = () => {
    const { open } = useAppKit()
    const { address, isConnected } = useAppKitAccount()
    
    return (
        <div className="mt-24 px-32">
            <div className="mt-24">
                <h1 className="text-3xl font-semibold">Register</h1>
                <p className="text-sm opacity-75">you can create ur account!</p>

                <div>
                    {isConnected ? (
                        <div className="mt-4">
                            <p className="text-sm">Your address: {address}</p>
                        </div>
                    ) : (
                        <button
                            onClick={() => open()}
                            className="mt-4 rounded text-sm cursor-pointer bg-blue-500 px-4 py-3 text-white"
                        >
                            Connect Wallet
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Register;