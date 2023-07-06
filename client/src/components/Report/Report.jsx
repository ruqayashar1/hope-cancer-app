import React from "react";
// import './HomePage.css'

function Report() {
    export const Report = (props) => {
        const [progress, setProgress] = useState("");
        
      
        const navigate = useNavigate();
      
        function handleSubmit(e) {
          e.preventDefault();
          console.log("successful")
          // console.log({name, password})
          fetch("/report", {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ progress }),
          }).then((r) => 
          {
            console.log(r)
            if (r.ok) {
              // console.log ("successful")
            //  r.json().then((user) => setUser(user));
             
             navigate('/user_profile');
            }
          });
        }
    return (
        <div className="report">
            <p>YOUR HEALTH PROGRESS</p>
        </div>

    );
}

export default Report;