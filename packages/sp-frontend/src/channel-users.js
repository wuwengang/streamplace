
import React, { Component } from "react";
import {UserBar, JoinButton} from "./channel-users.style";
import {watch, bindComponent} from "./sp-binding";
import SP from "sp-client";
import ChannelUserFrame from "./channel-user-frame";

export class ChannelUsers extends Component {
  static propTypes = {
    "channelId": React.PropTypes.string.isRequired,
    "channel": React.PropTypes.object,
  };

  static subscribe(props) {
    return {
      channel: watch.one("channels", {id: props.channelId})
    };
  }

  constructor() {
    super();
    this.state = {};
  }

  handleJoin() {
    const {channel} = this.props;
    SP.channels.update(this.props.channelId, {
      users: [
        ...channel.users,
        {
          userId: SP.user.id,
          muted: false,
        }
      ]
    })
    .catch((err) => {
      SP.error(err);
    });
  }

  amInChannel() {
    return !!this.props.channel.users.find(u => u.userId === SP.user.id);
  }

  render () {
    const {channel} = this.props;
    if (!channel) {
      return <UserBar />;
    }
    return (
      <UserBar>
        {channel.users.map(u => <ChannelUserFrame key={u.userId} userId={u.userId} channelId={this.props.channelId}>{u.userId}</ChannelUserFrame>)}
        {this.amInChannel() ? "" : <JoinButton onClick={() => this.handleJoin()}>Join Channel</JoinButton>}
      </UserBar>
    );
  }
}

export default bindComponent(ChannelUsers);