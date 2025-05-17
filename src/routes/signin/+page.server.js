import { signIn } from "../../auth";

async function signInAction() {
    signIn();
}

export const actions = { default: signIn };
