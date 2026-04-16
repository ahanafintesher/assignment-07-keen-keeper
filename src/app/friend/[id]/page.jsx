"use client";

import { useFriends } from "@/context/FriendsContext";
import { useParams } from "next/navigation";


const Details = () => {
    const {friend} = useFriends();
    const id = useParams();

    return (
        <div>
            <h3>gowa mara kha</h3>
        </div>
    );
};

export default Details;