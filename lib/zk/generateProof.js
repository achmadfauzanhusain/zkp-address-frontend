import * as snarkjs from "snarkjs"
import { buildPoseidon } from "circomlibjs"

export async function generateProof(secret) {
    if(!secret) {
        throw new Error("Secret is required to generate proof")
    }

    const poseidon = await buildPoseidon()
    const hashValue = poseidon([BigInt(secret)]);
    const hash = poseidon.F.toString(hashValue);

    const input = {
        address: secret,
        hash: hash
    }

    const { proof, publicSignals } = await snarkjs.groth16.fullProve(
        input,
        "/zk/AddressLogin_js/AddressLogin.wasm",
        "/zk/AddressLogin-final.zkey"
    )

    return { proof, publicSignals }
}