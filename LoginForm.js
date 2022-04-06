
function LoginForm(props) {

    const initialValues = {
        username: "",
        password: "",
    }

    const [disabled, setDisabled] = useState(true);
    const [form, setForm] = useState(initialValues);
    const [shaped, setShaped] = useState({});
    let history = useHistory();

    const checkSchema = (name, value) => {
        yup.reach(schema, name).validate(value)
            .then(() => {
                setShaped({...shaped, [name]: ''});
            }).catch((err) => {
                if (err.errors) { 
                    setShaped({...shaped, [name]: err.errors[0]});
                }
        });
 
        schema.isValid(form)
            .then((valid) => {
                setDisabled(!valid);
            });
    }

    const postNewLogin = (newLogin) => {
        var newUser = {
            ERS_USERNAME: newLogin.username,
            ERS_PASSWORD: newLogin.password
        };
        axios
          .post('', newUser)
          .then((res) => {
            const token = res.data.token;
            const user = res.data.user;
            localStorage.setItem('userRole', `${user.USER_ROLE_ID}`); 
            localStorage.setItem('userRole', `${user.USER_ROLE_ID}`); 
            localStorage.setItem('userID', `${user.ERS_USER_ID}`); 
            
            history.push("/dashboard");
          })
          .catch((err) => {
            console.log({err});
            alert(err.response.data.message);
          });
      };

    const goRegister = () => {
        history.push("/register");
    }

    const handleChange = (event) => {
        const { name, type, value, checked } = event.target;
        const updateData = (type === 'checkbox')?checked:value;
        setForm({...form, [name]: updateData});
        checkSchema(name, updateData);
    }
    const handleSubmit = () => {
        postNewLogin(form)
    }
}