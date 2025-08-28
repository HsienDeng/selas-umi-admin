import useUserModel from "@/models/user";

export default function HomePage() {
    const {user,fetchUser} = useUserModel();

    return (
    <div>
        {user.name}
        <button onClick={fetchUser}>update user</button>
    </div>
    );
}

