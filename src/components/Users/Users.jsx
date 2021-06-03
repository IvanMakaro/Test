import React from "react";
import userPhoto from "../../assets/yao.jpg";
import * as axios from "axios";
import s from "./Users.module.css";


class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then((response) => {
                this.props.setUsers(response.data.items)
            });
    }

    render() {
        // Путем деления макс кол-ва людей на размер страницы получаем кол-во страниц pagesCount

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);    // Получается просто целое число,
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)                                                                   // которое что бы отрисовать надо сначала добавить в массив
        }
        return (
            <div>

                <div>
                    {pages.map(elem => <span className={this.props.currentPage === elem && s.selectedPage} onClick={(e) =>{ this.onPageChanged(elem)}}>{elem}</span>
                    )}
                </div>


                {
                    this.props.users.map(elem => <div key={elem.id}>
                    <span>
                        <div>
                            <img src={elem.photos.small != null ? elem.photos.small : userPhoto}/>
                        </div>
                        <div>
                            {elem.followed
                                ? <button onClick={() => this.props.unfollow(elem.id)}>Unfollow</button>
                                : <button onClick={() => this.props.follow(elem.id)}>Follow</button>}
                        </div>
                    </span>
                        <span>
                        <span>
                            <div>{elem.name}</div>
                            <div>{elem.status}</div>
                        </span>
                        <span>
                            <div>{"elem.location.country"}</div>
                            <div>{"elem.location.city"}</div>
                        </span>
                    </span>
                    </div>)
                }
            </div>
        )
    }
}

export default Users