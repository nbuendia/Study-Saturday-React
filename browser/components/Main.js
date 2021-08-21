import React from "react";
import axios from "axios";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get("/student");
      this.setState({
        students: data,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <h3>STUDENTS</h3>
        <table>
          <tbody>
            <tr>
              <th>Full Name</th>
            </tr>

            {this.state.students.map((student) => {
              return (
                <tr key={student.id}>
                  <td>{student.fullName}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Main;
