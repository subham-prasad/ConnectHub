import { getMyPosts } from "@/api/post.api";
import type { PostApiResponse } from "@/types/post.types";
import { create } from "zustand";



interface myPostStoreInterface {
    myPosts: PostApiResponse | null,
    getMyPosts : () => Promise<void>
}

const MyPostStore = create<myPostStoreInterface>((set) => ({
    myPosts: null,
    getMyPosts: async () =>{
        const myAllPosts = await getMyPosts();


        console.log(myAllPosts.data)
        set(() => ({ myPosts: myAllPosts.data }));
    }
}))

export default MyPostStore