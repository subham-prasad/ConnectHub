import Axios from "@/lib/axios"
import type { ApiResponse } from "@/types/global-types"
import type { myProfile } from "@/types/myProfile.types";

export const MyProfile = async () => {


    try {
        const resposne = await Axios.get<ApiResponse<myProfile>>(
          "social-media/profile",
        );

        return resposne.data
    } catch (error: any) {
        throw(error)
    }
}