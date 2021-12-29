import React, { Component } from 'react';
// import classes from './styles.module.css'
// import service from '../../../request/service';

class AdminCreatePage extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       admins: [],
    //     };
    //     this.getLoadData = this.getLoadData.bind(this);
    // }   

    // async getLoadData(page) {
    //   let url = `/roles?limit=10&page=${page}`;
    //   let response = await service({ url: url, method: "GET" });
    //   this.setState({
    //     roles: response.data,
    //     paginate: response.page,
    //     isLoading: false,
    //   });
    // }

    // componentDidMount() {
    //     this.getLoadData();
    // }

    render() {
        return (
            <>
                {/* <div className={classes.container}>

                    <button onClick={() => this.props.history.push("/admins")}>Return admin list page</button>
                    <p>Hello workd admin create page</p>
                </div> */}
            </>
        );
    }
}
export default AdminCreatePage;