import { MyProfile } from "@/api/profile.api";
import type { myProfile } from "@/types/myProfile.types";
import { create } from "zustand";



interface ProfileStoreInstance {
  myProfile: myProfile | null;
  getMyProfile() : Promise<void>
}


const ProfileStore = create<ProfileStoreInstance>((set) =>
({
    myProfile: null,
    getMyProfile: async () => {
        const myProfileData = await MyProfile()
    

    set(() => ({myProfile: myProfileData.data}))
    }
})
)

export default ProfileStore;