(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var mountNode = document.getElementById('cardsContainer');

var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Button = ReactBootstrap.Button;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var Well = ReactBootstrap.Well;

var TagContainer = React.createClass({displayName: "TagContainer",
    render: function () {
        var tagNodes = this.props.tags.map(function (tag) {
            return (
                React.createElement(Tag, {key: tag.Id, onTagClick: this.props.onTagClick.bind(null, '?tagId=' + tag.Id), tagName: tag.Name})
            );
        }.bind(this));
        return (
            React.createElement("div", {className: "container tagContainer"}, 
                React.createElement(Well, null, 
                    React.createElement(ButtonToolbar, null, 
                        React.createElement(Button, {bsStyle: "primary", onClick: this.props.onTagClick.bind(null,'')}, "Reset"), 
                        tagNodes
                    )
                )
            )
        );
    }
});

var Tag = React.createClass({displayName: "Tag",
    render: function () {
        return (
            React.createElement(Button, {className: "tag", onClick: this.props.onTagClick}, this.props.tagName)
        );
    }
});

var CardContainer = React.createClass({displayName: "CardContainer",
    render: function () {
        var cardNodes = this.props.cards.map(function (card) {
            return (
                React.createElement(Card, {key: card.Id, title: card.Title, summary: card.Summary, date: card.CreatedDate, url: this.props.cardApi + "/" + card.Path, tags: card.Tags, onTagClick: this.props.onTagClick})
            );
        }.bind(this));
        return (
            React.createElement("div", {className: "container cardContainer"}, 
                React.createElement(Row, null, 
                    cardNodes
                )
            )
        );
    }
});

var Card = React.createClass({displayName: "Card",
    render: function () {
        return (
            React.createElement(Col, {xs: 12, md: 6}, 
                React.createElement("div", {className: "card"}, 
                    React.createElement("a", {className: "card-header", href: this.props.url}, 
                        React.createElement("h3", {className: "card-header-title"}, this.props.title), 
                        React.createElement("span", {className: "card-header-date"}, this.props.date)
                    ), 
                    React.createElement("div", {className: "card-body"}, 
                        React.createElement("p", null, this.props.summary)
                    ), 
                    React.createElement(MiniTagContainer, {tags: this.props.tags, onTagClick: this.props.onTagClick})
                )
            )
        );
    }
});

var MiniTagContainer = React.createClass({displayName: "MiniTagContainer",
    render: function () {
        var tagNodes = this.props.tags.map(function (tag) {
            return (
                React.createElement(MiniTag, {key: tag.Id, onTagClick: this.props.onTagClick.bind(null, '?tagId=' + tag.Id), tagName: tag.Name})
            );
        }.bind(this));
        return (
            React.createElement("div", {className: "container miniTagContainer"}, 
                React.createElement(ButtonToolbar, null, 
                    tagNodes
                )
            )
        );
    }
});

var MiniTag = React.createClass({displayName: "MiniTag",
    render: function () {
        return (
            React.createElement(Button, {className: "miniTag", bsSize: "xsmall", onClick: this.props.onTagClick}, this.props.tagName)
        );
    }
});

var PageContainer = React.createClass({displayName: "PageContainer",
    loadCardsFromServer: function (url) {
        var xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.onload = function () {
            var data = JSON.parse(xhr.responseText);
            this.setState({ cards: data });
        }.bind(this);
        xhr.send();
    },
    loadTagsFromServer: function (url) {
        var xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.onload = function () {
            var data = JSON.parse(xhr.responseText);
            this.setState({ tags: data });
        }.bind(this);
        xhr.send();
    },
    getInitialState: function () {
        return {
            cards: [],
            tags: []
        };
    },
    componentDidMount: function () {
        this.loadTagsFromServer(this.props.tagApi);
        this.loadCardsFromServer(this.props.cardApi);
    },
    handleTagClick: function (qry, event) {
        var url = this.props.cardApi + qry;
        this.loadCardsFromServer(url);
    },
    render: function () {
        return (
            React.createElement("div", {className: "pageContainer"}, 
                React.createElement(TagContainer, {onTagClick: this.handleTagClick, tags: this.state.tags}), 
                React.createElement(CardContainer, {onTagClick: this.handleTagClick, cards: this.state.cards, cardApi: this.props.cardApi})
            )
        );
    }
});

ReactDOM.render(
    React.createElement(PageContainer, {tagApi: "api/tags", cardApi: "api/cards"}),
    mountNode
);
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOlxcVXNlcnNcXGFtZWllcjAxNFxcRG9jdW1lbnRzXFxSZXBvc1xccmVwby1yZWFjdC1jYXJkc1xcUmVhY3RDYXJkc1xcc3JjXFxSZWFjdENhcmRzXFx3d3dyb290XFxqc1xcanN4XFxQYWdlQ29udGFpbmVyLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLENBQUMsSUFBSSxTQUFTLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOztBQUUzRCxJQUFJLEdBQUcsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDO0FBQzdCLElBQUksR0FBRyxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUM7QUFDN0IsSUFBSSxNQUFNLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQztBQUNuQyxJQUFJLGFBQWEsR0FBRyxjQUFjLENBQUMsYUFBYSxDQUFDO0FBQ2pELElBQUksSUFBSSxHQUFHLGNBQWMsQ0FBQyxJQUFJLENBQUM7O0FBRS9CLElBQUksa0NBQWtDLDRCQUFBO0lBQ2xDLE1BQU0sRUFBRSxZQUFZO1FBQ2hCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsRUFBRTtZQUM5QztnQkFDSSxvQkFBQyxHQUFHLEVBQUEsQ0FBQSxDQUFDLEdBQUEsRUFBRyxDQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUMsQ0FBQyxVQUFBLEVBQVUsQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsR0FBRyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUMsQ0FBQyxPQUFBLEVBQU8sQ0FBRSxHQUFHLENBQUMsSUFBSyxDQUFBLENBQUcsQ0FBQTtjQUMzRztTQUNMLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFD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USxDQUFBLENBQUcsQ0FBQTtZQUN0RyxDQUFBO1VBQ1I7S0FDTDtBQUNMLENBQUMsQ0FBQyxDQUFDOztBQUVILFFBQVEsQ0FBQyxNQUFNO0lBQ1gsb0JBQUMsYUFBYSxFQUFBLENBQUEsQ0FBQyxNQUFBLEVBQU0sQ0FBQyxVQUFBLEVBQVUsQ0FBQyxPQUFBLEVBQU8sRUFBRSxXQUFXLENBQUEsQ0FBRyxDQUFBO0lBQ3hELFNBQVM7QUFDYixDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwi77u/dmFyIG1vdW50Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJkc0NvbnRhaW5lcicpO1xyXG5cclxudmFyIFJvdyA9IFJlYWN0Qm9vdHN0cmFwLlJvdztcclxudmFyIENvbCA9IFJlYWN0Qm9vdHN0cmFwLkNvbDtcclxudmFyIEJ1dHRvbiA9IFJlYWN0Qm9vdHN0cmFwLkJ1dHRvbjtcclxudmFyIEJ1dHRvblRvb2xiYXIgPSBSZWFjdEJvb3RzdHJhcC5CdXR0b25Ub29sYmFyO1xyXG52YXIgV2VsbCA9IFJlYWN0Qm9vdHN0cmFwLldlbGw7XHJcblxyXG52YXIgVGFnQ29udGFpbmVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHRhZ05vZGVzID0gdGhpcy5wcm9wcy50YWdzLm1hcChmdW5jdGlvbiAodGFnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8VGFnIGtleT17dGFnLklkfSBvblRhZ0NsaWNrPXt0aGlzLnByb3BzLm9uVGFnQ2xpY2suYmluZChudWxsLCAnP3RhZ0lkPScgKyB0YWcuSWQpfSB0YWdOYW1lPXt0YWcuTmFtZX0gLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHRhZ0NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPFdlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblRvb2xiYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gYnNTdHlsZT1cInByaW1hcnlcIiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uVGFnQ2xpY2suYmluZChudWxsLCcnKX0+UmVzZXQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RhZ05vZGVzfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uVG9vbGJhcj5cclxuICAgICAgICAgICAgICAgIDwvV2VsbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSk7XHJcblxyXG52YXIgVGFnID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgcmVuZGVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJ0YWdcIiBvbkNsaWNrPXt0aGlzLnByb3BzLm9uVGFnQ2xpY2t9Pnt0aGlzLnByb3BzLnRhZ05hbWV9PC9CdXR0b24+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSk7XHJcblxyXG52YXIgQ2FyZENvbnRhaW5lciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjYXJkTm9kZXMgPSB0aGlzLnByb3BzLmNhcmRzLm1hcChmdW5jdGlvbiAoY2FyZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPENhcmQga2V5PXtjYXJkLklkfSB0aXRsZT17Y2FyZC5UaXRsZX0gc3VtbWFyeT17Y2FyZC5TdW1tYXJ5fSBkYXRlPXtjYXJkLkNyZWF0ZWREYXRlfSB1cmw9e3RoaXMucHJvcHMuY2FyZEFwaSArIFwiL1wiICsgY2FyZC5QYXRofSB0YWdzPXtjYXJkLlRhZ3N9IG9uVGFnQ2xpY2s9e3RoaXMucHJvcHMub25UYWdDbGlja30vPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2FyZENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPFJvdz5cclxuICAgICAgICAgICAgICAgICAgICB7Y2FyZE5vZGVzfVxyXG4gICAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxudmFyIENhcmQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q29sIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIiBocmVmPXt0aGlzLnByb3BzLnVybH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXItdGl0bGVcIj57dGhpcy5wcm9wcy50aXRsZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjYXJkLWhlYWRlci1kYXRlXCI+e3RoaXMucHJvcHMuZGF0ZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0aGlzLnByb3BzLnN1bW1hcnl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxNaW5pVGFnQ29udGFpbmVyIHRhZ3M9e3RoaXMucHJvcHMudGFnc30gb25UYWdDbGljaz17dGhpcy5wcm9wcy5vblRhZ0NsaWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxudmFyIE1pbmlUYWdDb250YWluZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgdGFnTm9kZXMgPSB0aGlzLnByb3BzLnRhZ3MubWFwKGZ1bmN0aW9uICh0YWcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxNaW5pVGFnIGtleT17dGFnLklkfSBvblRhZ0NsaWNrPXt0aGlzLnByb3BzLm9uVGFnQ2xpY2suYmluZChudWxsLCAnP3RhZ0lkPScgKyB0YWcuSWQpfSB0YWdOYW1lPXt0YWcuTmFtZX0gLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9LmJpbmQodGhpcykpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG1pbmlUYWdDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25Ub29sYmFyPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0YWdOb2Rlc31cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uVG9vbGJhcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSk7XHJcblxyXG52YXIgTWluaVRhZyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibWluaVRhZ1wiIGJzU2l6ZT1cInhzbWFsbFwiIG9uQ2xpY2s9e3RoaXMucHJvcHMub25UYWdDbGlja30+e3RoaXMucHJvcHMudGFnTmFtZX08L0J1dHRvbj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59KTtcclxuXHJcbnZhciBQYWdlQ29udGFpbmVyID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gICAgbG9hZENhcmRzRnJvbVNlcnZlcjogZnVuY3Rpb24gKHVybCkge1xyXG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub3BlbignZ2V0JywgdXJsLCB0cnVlKTtcclxuICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBjYXJkczogZGF0YSB9KTtcclxuICAgICAgICB9LmJpbmQodGhpcyk7XHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgIH0sXHJcbiAgICBsb2FkVGFnc0Zyb21TZXJ2ZXI6IGZ1bmN0aW9uICh1cmwpIHtcclxuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9wZW4oJ2dldCcsIHVybCwgdHJ1ZSk7XHJcbiAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgdGFnczogZGF0YSB9KTtcclxuICAgICAgICB9LmJpbmQodGhpcyk7XHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgIH0sXHJcbiAgICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjYXJkczogW10sXHJcbiAgICAgICAgICAgIHRhZ3M6IFtdXHJcbiAgICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBjb21wb25lbnREaWRNb3VudDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMubG9hZFRhZ3NGcm9tU2VydmVyKHRoaXMucHJvcHMudGFnQXBpKTtcclxuICAgICAgICB0aGlzLmxvYWRDYXJkc0Zyb21TZXJ2ZXIodGhpcy5wcm9wcy5jYXJkQXBpKTtcclxuICAgIH0sXHJcbiAgICBoYW5kbGVUYWdDbGljazogZnVuY3Rpb24gKHFyeSwgZXZlbnQpIHtcclxuICAgICAgICB2YXIgdXJsID0gdGhpcy5wcm9wcy5jYXJkQXBpICsgcXJ5O1xyXG4gICAgICAgIHRoaXMubG9hZENhcmRzRnJvbVNlcnZlcih1cmwpO1xyXG4gICAgfSxcclxuICAgIHJlbmRlcjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZUNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPFRhZ0NvbnRhaW5lciBvblRhZ0NsaWNrPXt0aGlzLmhhbmRsZVRhZ0NsaWNrfSB0YWdzPXt0aGlzLnN0YXRlLnRhZ3N9IC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRhaW5lciBvblRhZ0NsaWNrPXt0aGlzLmhhbmRsZVRhZ0NsaWNrfSBjYXJkcz17dGhpcy5zdGF0ZS5jYXJkc30gY2FyZEFwaT17dGhpcy5wcm9wcy5jYXJkQXBpfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICAgIDxQYWdlQ29udGFpbmVyIHRhZ0FwaT1cImFwaS90YWdzXCIgY2FyZEFwaSA9XCJhcGkvY2FyZHNcIiAvPixcclxuICAgIG1vdW50Tm9kZVxyXG4pO1xyXG5cclxuIl19
