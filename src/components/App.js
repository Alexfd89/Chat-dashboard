import React, { Component } from 'react';
import './App.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
import User from './User';

class App extends Component {

  state = {
      users : [{
        name: 'Steve Jobs',
        nickname: 'SJ',
        address: '5321 Pennsylvania Ave NW, Washington, DC 20500, USA',
        tel: 423423443,
        birthDate: 'May 14, 1984',
        gender: 'Male',
        language: 'English',
        imageURL: 'http://www.absfly.com/wp-content/uploads/2018/04/steve-jobs.jpg',
        status: 'offline'
      },{
        name: 'Mark Zuckerberg',
        nickname: 'MZ',
        address: '2200 Pennsylvania Ave NW, Washington, DC 20600, USA',
        tel: '3423423423',
        birthDate: 'May 14, 1984',
        gender: 'Male',
        language: 'English',
        imageURL: 'https://research.fb.com/wp-content/uploads/2016/11/post00006_image0002.jpg',
        status: 'online'
      },{
        name: 'Donald Trump',
        nickname: 'Donald Duck',
        address: '1600 Pennsylvania Ave NW, Washington, DC 20500, USA',
        tel: '4434242342',
        birthDate: 'May 14, 1984',
        gender: 'Male',
        language: 'English',
        imageURL: 'https://qph.fs.quoracdn.net/main-thumb-t-28717-200-qylrwevlxgcnoddancubpsnfajpuqoba.jpeg',
        status: 'offline'
      },{
        name: 'Tom Hanks',
        nickname: 'TH',
        address: '1900 Pennsylvania Ave NW, Washington, DC 20500, USA',
        tel: 32424234,
        birthDate: 'May 14, 1984',
        gender: 'Male',
        language: 'English',
        imageURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQosuAjXzMnceYUQ5VVhzJant2qDDG6kJDC71GU4CoLConC-PK2jQ',
        status: 'offline'
      },{
        name: 'Sundar Pichai',
        nickname: 'SP',
        address: '99234 Pennsylvania Ave NW, Washington, DC 20500, USA',
        tel: 23423234,
        birthDate: 'May 14, 1984',
        gender: 'Male',
        language: 'English',
        imageURL:'https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Hi_Res_1x1s_0015_Sundar.max-200x200.jpg',
        status: 'online'
    },]
  };

  render() {
    return (
      <div>
        <div className='sidebar left-sidebar'>
          <div className='pb-4 pt-3 text-center'>
            <i className="fas fa-bars text-light"></i>
          </div>
          <div>
            <button className='btn-soc'>
              <img className='social-icon' alt='social-icon' src='./images/whatsapp.png' />
            </button>
          </div>
          <div>
            <button className='btn-soc'>
              <img className='social-icon' alt='social-icon' src='./images/messenger.png' />
            </button>
          </div>
          <div>
            <button className='btn-soc'>
              <img className='social-icon' alt='social-icon' src='./images/viber.png' />
            </button>
          </div>
          <div>
            <button className='btn-soc'>
              <img className='social-icon' alt='social-icon' src='./images/skype.png' />
            </button>
          </div>
        </div>
        <div className='sidebar mid-sidebar'>
          <ListGroup>
                <ListGroupItem className='d-flex justify-content-between align-items-center pb-4'>
                  <h5 className='text-light'>Inbox</h5>
                  <span className="nav-add-icon">
                      <i className="fas fa-user-plus text-light"></i>
                  </span>
                </ListGroupItem>
            </ListGroup>
            <ListGroup>
                <ListGroupItem>
                    <button className='btn-nav'>
                        <div>All Messages</div>
                        <div>26</div>
                    </button>
                    <button className='btn-nav'>
                        <div>Unread</div>
                        <div>89</div>
                    </button>
                    <button className='btn-nav'>
                        <div>Important</div>
                        <div>6</div>
                    </button>
                    <button className='btn-nav'>
                        <div>Drafts</div>
                        <div>27</div>
                    </button>
                </ListGroupItem>
            </ListGroup>
            <hr />
            <ListGroup>
                <ListGroupItem>
                    <button className='btn-nav'>
                      <div>Teams</div>
                      <div>4</div>
                    </button>
                    <button className='btn-nav'>
                        <div>Groups</div>
                        <div>3</div>
                    </button>
                    <button className='btn-nav'>
                        <div>Channels</div>
                        <div>18</div>
                    </button>
                    <button className='btn-nav'>
                        <div>Locations</div>
                        <div></div>
                    </button>
                    <button className='btn-nav'>
                        <div>Media</div>
                        <div>120</div>
                    </button>
                </ListGroupItem>
            </ListGroup>
            <hr />
            <ListGroup>
                <ListGroupItem>
                    <button className='btn-nav'>
                        <div>Help</div>
                    </button>
                    <button className='btn-nav'>
                        <div>Settings</div>
                    </button>
                </ListGroupItem>
          </ListGroup>
        </div>
        <div className='sidebar right-sidebar'>
            <ListGroup className='search'>
              <ListGroupItem className='nav-search'>
                <input type='text' placeholder='Search'/>
                <i className="fas fa-search"></i>
              </ListGroupItem>
            </ListGroup>
            <ListGroup>
              <ListGroupItem className='p-0'>
                {
                  this.state.users.map((user, index) => {
                    return <User user={user} key={index} />
                  })
                }
              </ListGroupItem>
            </ListGroup>
        </div>
      </div>
    );
  }
}

export default App;
