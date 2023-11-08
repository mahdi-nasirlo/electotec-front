import React from 'react';
import {Avatar, AvatarFallback} from "@/components/ui/avatar";

const UserAvatar = () => {
    return (
        <Avatar className="ml-2">
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    );
};

export default UserAvatar;