import React, { Component } from 'react';
// import classes from './styles.module.css';
// import HeaderComponent from '../../../components/HeaderComponent'
import service from '../../../request/service';

class RoleListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          admins: [],
          isLoading: false,
          paginate: null
        };
        this.getLoadData = this.getLoadData.bind(this);
        this.userListChange = this.userListChange.bind(this);
    }

    async getLoadData(page) {
      let url = `/roles?limit=10&page=${page}`;
      let response = await service({ url: url, method: "GET" });
      this.setState({
        admins: response.data,
        paginate: response.page,
        isLoading: false,
      });
    }

    userListChange(value)
    {
        console.log(value, 'click item')
        //run function
    }

    componentDidMount() {
        this.getLoadData();
    }

    render() {
        return (
            <>
                {/* <div className={classes.container}>

                    <button onClick={() => this.props.history.push("/admins/create")}>Go Create page</button>

                    <HeaderComponent userList={this.state.admins} f_user_list={this.userListChange} />

                    <p>Hello workd admin list</p>
                    
                    {
                        this.state.admins.map((item, index) => (
                            <div key={index}>
                                <button onClick={() => this.props.history.push(`/admins/edit/${item.id}`)}>
                                    <p>{item.name}</p>
                                </button>
                            </div>
                        ))
                    }

                </div> */}
            </>
        );
    }
}
export default RoleListPage;