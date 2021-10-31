export const UserDisplay = (props) => {
    return (
        <div>
            <h1>
                {props.user.full_name}
            </h1>
            <h2>
                {props.user.email}
            </h2>
        </div>
    )
}