import { defineStore } from "pinia";

export const useEmailStore = defineStore("email", () => {
  const emails = ref<string[]>([]);

  const addEmail = (email: string) => {
    emails.value.push(email);
  };

  function removeEmail(index: number) {
    emails.value.splice(index, 1);
  }

  return {
    emails,
    addEmail,
    removeEmail,
  };
});
