import React, { Component } from 'react';
// import classes from './styles.module.css'
import service from '../../../request/service';

class AdminEditPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          admins: [],
        };
        this.getLoadData = this.getLoadData.bind(this);
    }

    async getLoadData(page) {
      let url = `/roles?limit=10&page=${page}`;
      let response = await service({ url: url, method: "GET" });
      this.setState({
        roles: response.data,
        paginate: response.page,
        isLoading: false,
      });
    }

    componentDidMount() {
        console.log(this.props.match.params.id, 'xxxxxxxx')
        this.getLoadData();
    }

    render() {
        return (
            <>
                {/* <div className={classes.container}>
                    <p>Hello workd admin edit page</p>
                </div> */}
            </>
        );
    }
}
export default AdminEditPage;