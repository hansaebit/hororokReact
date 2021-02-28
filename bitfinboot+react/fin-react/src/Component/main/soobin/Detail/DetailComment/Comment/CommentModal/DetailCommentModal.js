import React, { Component } from 'react';
import "./DetailCommentModal.css";
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { FaTimes } from "react-icons/fa";

class DetailCommentModal extends Component {
    render() {
        // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
        const { open, close, header } = this.props;
        return (
            <div className={ open ? 'openModal modal': 'modal' }>
                { open ? (  
                    <section>
                        <header>
                            { header }
                            <IconButton color="inherit" className="close" onClick={close}>
                                <Badge color="secondary">
                                    <FaTimes/>
                                </Badge>
                            </IconButton>
                        </header>
                        <main>
                            {this.props.children}
                        </main>
                    </section>
                ) : null }
            </div>
        )
    }
}
export default DetailCommentModal;