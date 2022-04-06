function ViewAllUsers(props) { 
    const [users, setUsers] = useState(null)
    const {trigger,setTrigger} = props
    const history = useHistory()

    useEffect(()=> {
        if (loginAsManager()) {
            axiosWithAuth()
            .get()
                .then(res => 
                    setUsers(res.data)
                )
        } else {
            history.push('/dashboard');
        }
    },[trigger])
    return;