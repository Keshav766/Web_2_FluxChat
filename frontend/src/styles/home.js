
export const sidebar = {
    // container: `lg:w-[30%] ${selectedUser ? "flex" : "hidden"} w-full h-full bg-slate-200`, 

    header: 'w-full h-75 bg-[#20c7ff] rounded-b-[30%] shadow-gray-400 shadow-lg flex flex-col gap-2.5 justify-center  px-5', 

    title: 'text-white font-bold text-[25px]',

    userRow: 'w-full flex justify-between gap-5 items-center',

    userName: "text-gray-800 font-bold text-[20px]",

    profileImageWrapperM: "w-18 h-18 mt-2.5 bg-white rounded-lg overflow-hidden flex justify-center items-center shadow-gray-500 shadow-lg",

    profileImageWrapper: "w-12 h-12 mt-2.5 bg-white rounded-full overflow-hidden flex justify-center items-center shadow-gray-500 shadow-lg",

    currentProfileImage: "h-full object-cover cursor-pointer",

    otherProfileImage: "h-full object-cover",

    searchOffWrapper: "w-12 h-12 bg-white rounded-full overflow-hidden flex justify-center items-center mt-2.5 shadow-gray-500 shadow-lg cursor-pointer",

    searchOnWrapper: 'w-full h-12 bg-white shadow-gray-500 shadow-lg flex items-center gap-2.5 mt-2.5 rounded-full overflow-hidden p-5 relative',

    logout: 'w-15 h-15 z-50 bg-[#20c7ff] text-gray-700 rounded-full overflow-hidden flex justify-center items-center mt-2.5 shadow-gray-500 shadow-lg cursor-pointer fixed bottom-5 left-5',

    chatlistContainer: 'w-full h-[55%] overflow-auto flex flex-col gap-4 mt-6',

    chatlistItem: 'w-[95%] h-12 flex justify-start items-center gap-3 shadow-gray-500 shadow-lg bg-white rounded-full hover:bg-[#92e0f9] cursor-pointer',

    chatlistProfileImageWrapper: 'w-12 h-12 bg-white rounded-full overflow-hidden flex justify-center items-center shadow-gray-500 shadow-lg',
}

export const messagearea = {

    header: 'w-full h-20 bg-[#1b7897] rounded-b-[20px] shadow-gray-400 shadow-lg flex items-center gap-5 px-5',

    headerImageWrapper: "w-12 h-12  bg-white rounded-full overflow-hidden flex justify-center items-center shadow-gray-500 shadow-lg",

    headerName: 'text-white font-semibold text-[15px]',

    base: 'w-full h-full flex flex-col justify-center items-center',
    
}