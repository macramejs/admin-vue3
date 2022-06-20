import { User } from "@/types";
import { ref } from "vue";

export const isAuthenticated = ref<boolean>(false)
export const authedUser = ref<User>()

