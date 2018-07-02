import React from 'react';



class Navbar extends React.Component {
    render() {
        return (
            <div className="container-fluid" id="serviceMainDiv">
                <h1 className='text-center' id='servicesHeading'>Services</h1>
                <div className="card-deck">
                    <div className="card" id="deckFirstCard">
                        <div className="row align-items-center justify-content-center">
                            <img className="card-img-top"
                                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA%2FPjxzdmcgaGVpZ2h0PSIzMiIgd2lkdGg9IjMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wLS4wMDNoMzBsLTMgMjguOTk5LTExIDNoLTJsLTExLTMtMy0yOC45OTl6IiBmaWxsPSIjRDk5NjY2Ii8%2BPHBhdGggZD0iTTE1IDIuOTk2aDExbC0yIDIzLTkgM3YtMjZ6IiBmaWxsPSIjRjRCNDU5Ii8%2BPHBvbHlnb24gZmlsbD0iI2ZmZiIgcG9pbnRzPSIyMy4wMTgsOC45ODMgMjMuMzMzLDUuOTk2IDUuOTY4LDUuOTk2IDYuMzE4LDguOTgzIDYuNjM4LDEzLjAwMyA2LjYzNCwxMy4wMDMgNi45MzcsMTUuOTk1IDE4LjU3OCwxNS45OTUgMTguMTc4LDIwLjc1NSAxNSwyMS43NTkgMTUsMjEuNzI4IDEwLjc3NCwyMC42MTEgMTAuNTE1LDE3Ljk4OCA2Ljk4NiwxNy45ODggNy40NiwyMi44MDYgNy40NiwyMy4wMDMgMTUsMjQuOTk2IDIxLjMyMywyMy4wMDMgMjEuNCwyMy4wMDMgMjEuNDAyLDIyLjk3NiAyMS40MTYsMjIuOTc0IDIxLjQxNiwyMi44MTYgMjEuOTg4LDE1Ljk5NSAyMi4wMDEsMTUuOTk1IDIyLjMwNSwxMy4wMDMgMTAuMzA4LDEzLjAwMyA5Ljk4OCw4Ljk4MyIvPjxnIGZpbGw9IiNFNUU1RTUiPjxwb2x5Z29uIHBvaW50cz0iMTUsNS45OTYgNS45NjgsNS45OTYgNi4zMTgsOC45ODMgNi42MzgsMTMuMDAzIDYuNjM0LDEzLjAwMyA2LjkzNywxNS45OTUgMTUsMTUuOTk1IDE1LDEzLjAwMyAxMC4zMDgsMTMuMDAzIDkuOTg4LDguOTgzIDE1LDguOTgzIi8%2BPHBvbHlnb24gcG9pbnRzPSIxNSwyMS43MjggMTAuNzc0LDIwLjYxMSAxMC41MTUsMTcuOTg4IDYuOTg2LDE3Ljk4OCA3LjQ2LDIyLjgwNiA3LjQ2LDIzLjAwMyAxNSwyNC45OTYgMTUsMjEuNzU5Ii8%2BPC9nPjwvc3ZnPg%3D%3D"
                                alt="Card image cap" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-center">HTML 5</h5>
                            <p className="card-text text-center">Out team has most skilled person in who are expert in using HTML5. Its essential so that we have best knowlwdge of html</p>
                        </div>
                    </div>
                    <div className="card" id="deckFirstCard">
                        <div className="row align-items-center justify-content-center">
                            <img className="card-img-top"
                                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA%2FPjxzdmcgaGVpZ2h0PSIzMiIgd2lkdGg9IjMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wLS4wMDNoMzBsLTMgMjguOTk5LTExIDNoLTJsLTExLTMtMy0yOC45OTl6IiBmaWxsPSIjRDk5NjY2Ii8%2BPHBhdGggZD0iTTE1IDIuOTk2aDExbC0yIDIzLTkgM3YtMjZ6IiBmaWxsPSIjRjRCNDU5Ii8%2BPHBvbHlnb24gZmlsbD0iI2ZmZiIgcG9pbnRzPSIyMy4wMTgsOC45ODMgMjMuMzMzLDUuOTk2IDUuOTY4LDUuOTk2IDYuMzE4LDguOTgzIDYuNjM4LDEzLjAwMyA2LjYzNCwxMy4wMDMgNi45MzcsMTUuOTk1IDE4LjU3OCwxNS45OTUgMTguMTc4LDIwLjc1NSAxNSwyMS43NTkgMTUsMjEuNzI4IDEwLjc3NCwyMC42MTEgMTAuNTE1LDE3Ljk4OCA2Ljk4NiwxNy45ODggNy40NiwyMi44MDYgNy40NiwyMy4wMDMgMTUsMjQuOTk2IDIxLjMyMywyMy4wMDMgMjEuNCwyMy4wMDMgMjEuNDAyLDIyLjk3NiAyMS40MTYsMjIuOTc0IDIxLjQxNiwyMi44MTYgMjEuOTg4LDE1Ljk5NSAyMi4wMDEsMTUuOTk1IDIyLjMwNSwxMy4wMDMgMTAuMzA4LDEzLjAwMyA5Ljk4OCw4Ljk4MyIvPjxnIGZpbGw9IiNFNUU1RTUiPjxwb2x5Z29uIHBvaW50cz0iMTUsNS45OTYgNS45NjgsNS45OTYgNi4zMTgsOC45ODMgNi42MzgsMTMuMDAzIDYuNjM0LDEzLjAwMyA2LjkzNywxNS45OTUgMTUsMTUuOTk1IDE1LDEzLjAwMyAxMC4zMDgsMTMuMDAzIDkuOTg4LDguOTgzIDE1LDguOTgzIi8%2BPHBvbHlnb24gcG9pbnRzPSIxNSwyMS43MjggMTAuNzc0LDIwLjYxMSAxMC41MTUsMTcuOTg4IDYuOTg2LDE3Ljk4OCA3LjQ2LDIyLjgwNiA3LjQ2LDIzLjAwMyAxNSwyNC45OTYgMTUsMjEuNzU5Ii8%2BPC9nPjwvc3ZnPg%3D%3D"
                                alt="Card image cap" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-center">HTML 5</h5>
                            <p className="card-text text-center">Out team has most skilled person in who are expert in using HTML5. Its essential so that we have best knowlwdge of html</p>
                        </div>
                    </div>
                    <div className="card" id="deckFirstCard">
                        <div className="row align-items-center justify-content-center">
                            <img className="card-img-top"
                                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA%2FPjxzdmcgaGVpZ2h0PSIzMiIgd2lkdGg9IjMwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0wLS4wMDNoMzBsLTMgMjguOTk5LTExIDNoLTJsLTExLTMtMy0yOC45OTl6IiBmaWxsPSIjRDk5NjY2Ii8%2BPHBhdGggZD0iTTE1IDIuOTk2aDExbC0yIDIzLTkgM3YtMjZ6IiBmaWxsPSIjRjRCNDU5Ii8%2BPHBvbHlnb24gZmlsbD0iI2ZmZiIgcG9pbnRzPSIyMy4wMTgsOC45ODMgMjMuMzMzLDUuOTk2IDUuOTY4LDUuOTk2IDYuMzE4LDguOTgzIDYuNjM4LDEzLjAwMyA2LjYzNCwxMy4wMDMgNi45MzcsMTUuOTk1IDE4LjU3OCwxNS45OTUgMTguMTc4LDIwLjc1NSAxNSwyMS43NTkgMTUsMjEuNzI4IDEwLjc3NCwyMC42MTEgMTAuNTE1LDE3Ljk4OCA2Ljk4NiwxNy45ODggNy40NiwyMi44MDYgNy40NiwyMy4wMDMgMTUsMjQuOTk2IDIxLjMyMywyMy4wMDMgMjEuNCwyMy4wMDMgMjEuNDAyLDIyLjk3NiAyMS40MTYsMjIuOTc0IDIxLjQxNiwyMi44MTYgMjEuOTg4LDE1Ljk5NSAyMi4wMDEsMTUuOTk1IDIyLjMwNSwxMy4wMDMgMTAuMzA4LDEzLjAwMyA5Ljk4OCw4Ljk4MyIvPjxnIGZpbGw9IiNFNUU1RTUiPjxwb2x5Z29uIHBvaW50cz0iMTUsNS45OTYgNS45NjgsNS45OTYgNi4zMTgsOC45ODMgNi42MzgsMTMuMDAzIDYuNjM0LDEzLjAwMyA2LjkzNywxNS45OTUgMTUsMTUuOTk1IDE1LDEzLjAwMyAxMC4zMDgsMTMuMDAzIDkuOTg4LDguOTgzIDE1LDguOTgzIi8%2BPHBvbHlnb24gcG9pbnRzPSIxNSwyMS43MjggMTAuNzc0LDIwLjYxMSAxMC41MTUsMTcuOTg4IDYuOTg2LDE3Ljk4OCA3LjQ2LDIyLjgwNiA3LjQ2LDIzLjAwMyAxNSwyNC45OTYgMTUsMjEuNzU5Ii8%2BPC9nPjwvc3ZnPg%3D%3D"
                                alt="Card image cap" />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title text-center">HTML 5</h5>
                            <p className="card-text text-center">Out team has most skilled person in who are expert in using HTML5. Its essential so that we have best knowlwdge of html</p>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Navbar;