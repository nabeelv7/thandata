import { signIn } from "../../auth";
import { redirect } from "@sveltejs/kit";

function signInAction() {
  signIn();
  return redirect("/");
}

export const actions = { default: signInAction };
