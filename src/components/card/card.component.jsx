const Card = ({user}) => {
    const {id, name, email} = user;
    return (
        <div key={id}>
            <h1 key={`name-${id}`}> {name}</h1>
            <h2 key={`id-${id}`}>Id: {id}</h2>
            <h2 key={`email-${id}`}>Email: {email}</h2>
            <h3 key={`end-${id}`}>--------------------</h3>
        </div>
    )
}

export default Card;