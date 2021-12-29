import React, { Component } from 'react';

import classes from './styles.module.css'
import service from '../../../request/service';

class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
          account_name: null,
          password: null,
          has_error: false,
          err_msg: null
        };
        this.inputChange = this.inputChange.bind(this);
        this.loginSubmit = this.loginSubmit.bind(this);
    }

    inputChange(e)
    {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    async loginSubmit(e)
    {
        e.preventDefault();
        let url = `/admin/login`;
        let data = {
            account_name : this.state.account_name,
            password: this.state.password
        }
        let response = await service({ url: url, method: "POST", data: data });
        console.log(response, 'response')
        if(response.status === 'success') {
            localStorage.setItem('token', response.data.tokens )
            
            console.log(response.data)
        }else {
            this.setState({
                has_error: true,
                err_msg: response.message
            })
            
        }
    }

    render() {
        return (
            <>
            <div className={classes.container}>
                <div className ={classes.wrapper}>
                    <div className ={`${classes.row} row`}>
                <form onSubmit={this.loginSubmit} >
                    <label className={classes.label}>Login</label>
                    {
                        this.state.has_error &&
                        <div class="alert alert-danger" role="alert">
                        {this.state.err_msg}
                        </div>
                    }
                    <div className={`${classes.form_group} form-group`}>
                        <label className='form-label'>Account_name</label>
                        <input type="Account_name" className='form-control' placeholder='Enter the Account_name' name="account_name"
                        onChange={e => this.inputChange(e)}/>
                    </div>

                    <div className={`${classes.form_group} form-group`}>
                        <label className='form-label'>Password</label>
                        <input type="password" className='form-control' placeholder='Enter the password' name="password" onChange={e => this.inputChange(e)}/>
                    </div>

                    <button type="submit" className={`${classes.btn} btn btn-primary btn-block`}>Submit</button>
                </form>
                    </div>
                </div>
            </div>
            </>
        );
    }
}
export default LoginPage;