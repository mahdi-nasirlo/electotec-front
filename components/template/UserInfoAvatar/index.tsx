import React from 'react';
import UserAvatar from "@/components/template/UserInfoAvatar/UserAvatar";

const Index = () => {
    return (
        <div className="flex items-center">
            <UserAvatar/>
            <div>
                <div className="text-sm">
                    علی نجفی
                </div>
                <div className="text-xs text-gray-400">
                    عضو هیات مدیره آلتون رای
                </div>
            </div>
        </div>
    );
};

export default Index;