import React from 'react';
import { Icon, Button, Modal } from 'antd';
import { FormattedMessage } from 'react-intl';
import MenuEditView from './MenuEditView';

export default class ImageComp extends React.Component {
  state = {
    editMenuShow: false,
  }

  switchEditMenuFunc = () => {
    this.setState({
      editMenuShow: !this.state.editMenuShow,
    });
  }

  render() {
    const { editData } = this.props;
    if (typeof editData.children !== 'string') {
      return null;
    }
    return (
      <div>
        <Button type="primary" size="small" onClick={this.switchEditMenuFunc}>
          <Icon type="bars" />
        </Button>
        <Modal
          title={<FormattedMessage id="app.state.menu.header" />}
          visible={this.state.editMenuShow}
          onCancel={this.switchEditMenuFunc}
          footer={null}
          width={400}
        >
          <MenuEditView {...this.props} />
        </Modal>
      </div>
    );
  }
}
