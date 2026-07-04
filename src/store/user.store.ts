import { getCurrentUser } from "@/api/auth.api";
import type { User } from "@/types/user.types";
import { create } from "zustand";

interface UserStoreInterface {
  user: User | null;
  getCurrentUser: () => void
}

const UserStore =
  create <UserStoreInterface>((set) => ({
    
      user: null,

      getCurrentUser: async () => {
        const currentUser = await getCurrentUser();
        set(() => ({ user: currentUser.data }));
      },
    
  }));

export default UserStore