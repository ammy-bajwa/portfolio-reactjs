import React from 'react';

class Slider extends React.Component {
    render() {
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div class="row align-items-center justify-content-center">
                            <img className="d-block w-100"
                                src="./images/idea.svg"
                                alt="First slide" />
                        </div>

                        <div class="carousel-caption d-none d-md-block">
                            <h1>Wellcome</h1>
                            <h2>Hello And Wellcome I Am Here To Transform You`r Idea Into Reality</h2>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div class="row align-items-center justify-content-center">
                            <img className="d-block w-100"
                                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA%2FPjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMxNDc0OEE7fQoJLnN0MXtmaWxsOiMyMzIzMjM7fQo8L3N0eWxlPjxnIGlkPSJYTUxJRF8xNzRfIj48cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDEsMzE1LjhjLTUuOCwwLTExLjQtMS42LTE2LjQtNC42TDYsMzAwdjE3Mi41aDY3LjVWMjk3LjFsLTExLDEwLjIgICBDNTYuNywzMTIuOCw0OSwzMTUuOCw0MSwzMTUuOHoiIGlkPSJYTUxJRF8zMzkwXyIvPjxwb2x5Z29uIGNsYXNzPSJzdDAiIGlkPSJYTUxJRF8xODNfIiBwb2ludHM9IjE0My4yLDIzMi40IDE0My4yLDQ3Mi42IDIxMC44LDQ3Mi42IDIxMC44LDIyNS41IDE3Ni4xLDIwMS44ICAiLz48cGF0aCBjbGFzcz0ic3QwIiBkPSJNMjkwLjIsMjczLjFjLTYuNCwwLTEyLjYtMS45LTE3LjktNS41bC0xMy4zLTkuMXYyMTRoNjcuNVYyNTEuOEwzMTEsMjY1LjQgICBDMzA1LjIsMjcwLjQsMjk3LjgsMjczLjEsMjkwLjIsMjczLjF6IiBpZD0iWE1MSURfMTgyXyIvPjxwb2x5Z29uIGNsYXNzPSJzdDAiIGlkPSJYTUxJRF8xNzVfIiBwb2ludHM9IjM3OC41LDQ3Mi42IDQ0Niw0NzIuNiA0NDYsMTQ4IDM3OC41LDIwNi43ICAiLz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNNDAxLjEsNjkuM0w0MjksOTYuNEwyODguOCwyMTcuNWwtMTA1LjEtNzEuOGMtNy4zLTUtMTcuMi00LjMtMjMuNywxLjhsLTEyMS42LDExM0w2LjEsMjQwLjkgICB2NDQuNGwyNS4xLDE1LjFjNy4zLDQuNCwxNi41LDMuNCwyMi44LTIuNGwxMjAuOS0xMTIuNGwxMDQuNiw3MS41YzcuMSw0LjksMTYuNyw0LjMsMjMuMi0xLjNsMTUzLjctMTMyLjlsMjMsMjIuM0w1MDYsMzkuNCAgIEw0MDEuMSw2OS4zeiIgaWQ9IlhNTElEXzQ5OF8iLz48L2c%2BPC9zdmc%2B"
                                alt="First slide" />
                        </div>

                        <div class="carousel-caption d-none d-md-block">
                            <h1>Transorm Your Business</h1>
                            <h2>We Will Transform And Shape You`r Startup Business Into A Beautiful And Reliable Website Or Application</h2>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div class="row align-items-center justify-content-center">
                            <img className="d-block w-100"
                                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA%2FPjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDIwMCAyMDAiIGhlaWdodD0iMjAwcHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyMDAgMjAwIiB3aWR0aD0iMjAwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwYXRoIGQ9Ik0xNTcuMDA5LDExNy41NzVjLTAuNTQzLTIuMzkyLTEuODY4LTQuNjQ4LTMuOTU0LTYuNDczYy0yLjEwMy0xLjgxMy00LjY2NS0yLjkwNy03LjMyMy0zLjMwN2wtNDIuNzQtOC4yNzEgICBsMTIuMzY0LDguMjA1bC0xOS41MjEsNjEuMTk1bC0xMC45OTMtNDUuNDU3bC0xMC45OTYsNDUuNDU3TDU0LjMzLDEwNy43M2wxMi4zNjItOC4yMDVsLTQyLjc0Myw4LjI3MSAgIGMtMi42NTYsMC4zOTktNS4yMjEsMS40OTQtNy4zMjEsMy4zMDdjLTIuMDg4LDEuODI0LTMuNDEzLDQuMDgxLTMuOTU2LDYuNDczTDAsMTczLjIzNWwyMy45MDEsOC4yOTggICBjNy45NDIsOC4yNDcsMzAuMTU0LDE0LjMxNiw1Ni43OTcsMTQuODkzaDQuMTQzaDQuMTRjMjYuNjQ2LTAuNTc2LDQ4Ljg1OC02LjY0Niw1Ni43OTYtMTQuODkzbDIzLjkwNS04LjI5OEwxNTcuMDA5LDExNy41NzV6IiBmaWxsPSIjNUU4ODlFIi8%2BPHBvbHlnb24gZmlsbD0iIzVFODg5RSIgcG9pbnRzPSI4NC44NDEsMTA1LjczNSA3NC45ODcsMTA5LjI2NSA4NC44NDEsMTIzLjQ2OSA5NC42OTMsMTA5LjI2NSAgIi8%2BPHBhdGggZD0iTTEyMS40MTgsNTAuOTI1YzAtMjUuMjYyLTEwLjM5NC00NS4wNi0zNi41NzctNDUuMDZjLTI2LjE4NiwwLTM2LjU3OSwxOS43OTgtMzYuNTc5LDQ1LjA2ICAgYy0yLjczOCwxLjQzLTQuNTM1LDQuNzgyLTEuODQ4LDExLjk2N2MxLjM1OCwzLjYwOSwzLjc1LDYuNjMyLDUuNzc3LDguMjE0YzcuNDYxLDE4LjU3OCwyMi4xMzcsMzIuOTIxLDMyLjY1LDMyLjkyMSAgIGMxMC41MDgsMCwyNS4xODYtMTQuMzQ0LDMyLjY0Ni0zMi45MjFjMi4wMzEtMS41ODIsNC40Mi00LjYwNCw1Ljc3Ni04LjIxNEMxMjUuOTU2LDU1LjcwNywxMjQuMTU4LDUyLjM1NCwxMjEuNDE4LDUwLjkyNXoiIGZpbGw9IiM1RTg4OUUiLz48Zz48cGF0aCBkPSJNMTQ3LjM0OSw0MC45ODVoLTE5LjQyNGMwLjEyNSwxLjEwNCwwLjIzMSwyLjIyMiwwLjMxNSwzLjM2NWgxOS4xMDhWNDAuOTg1eiIgZmlsbD0iIzVFODg5RSIvPjxwYXRoIGQ9Ik0xODYuNjI2LDI5LjM4NWgtNjEuMDEzYzAuMzI4LDEuMDk1LDAuNjE0LDIuMjI0LDAuODg2LDMuMzY3aDYwLjEyN1YyOS4zODV6IiBmaWxsPSIjNUU4ODlFIi8%2BPHBhdGggZD0iTTE5Ny43MDEsNS44NzVjLTEuNTM0LTEuNTMyLTMuNTQ1LTIuMzAxLTUuNTU2LTIuMzAxaC04Ni40NTRjMy44MzUsMi4wMTUsNy4yMzUsNC42NDYsMTAuMTU5LDcuODU2ICAgIGg3Ni4yOTV2NTQuOTlIMTcxLjEybC0xNS45MTUsMTUuOTE3VjY2LjQyaC0yNS43NTljLTEuMjM3LDIuOTAxLTMuMDA0LDUuNjQ1LTUuMDQxLDcuODU4aDIyLjk0M3YyMS42MDYgICAgYzAsMC44NzgsMC41MjEsMS43MTQsMS4zODQsMi4wNzNjMC44NjUsMC4zNTksMS44MjQsMC4xMzgsMi40NDctMC40ODdsMjMuMTk1LTIzLjE5M2gxNy43NzFjMi4wMTEsMCw0LjAyMS0wLjc2OSw1LjU1Ni0yLjMwMyAgICBjMS41MzQtMS41MzQsMi4yOTktMy41NDQsMi4yOTktNS41NTVWMTEuNDNDMjAwLDkuNDE5LDE5OS4yMzUsNy40MTEsMTk3LjcwMSw1Ljg3NXoiIGZpbGw9IiM1RTg4OUUiLz48cGF0aCBkPSJNMTg2LjYyNiwxNy43OWgtNjYuMDYzYzAuNjUyLDEuMDgxLDEuMjY5LDIuMjAxLDEuODQ0LDMuMzY3aDY0LjIxOVYxNy43OXoiIGZpbGw9IiM1RTg4OUUiLz48L2c%2BPC9nPjwvc3ZnPg%3D%3D"
                                alt="First slide" />
                        </div>

                        <div class="carousel-caption d-none d-md-block">
                            <h1>Customer Care</h1>
                            <h2>My Goal As A Freelancer Is To Have Customer Service That Is Not Just The Best, But Legendary. </h2>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        )
    }
}

export default Slider;