var mountNode = document.getElementById('cardsContainer');

var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Button = ReactBootstrap.Button;
var ButtonToolbar = ReactBootstrap.ButtonToolbar;
var Well = ReactBootstrap.Well;

var TagContainer = React.createClass({
    render: function () {
        var tagNodes = this.props.tags.map(function (tag) {
            return (
                <Tag key={tag.Id} onTagClick={this.props.onTagClick.bind(null, '?tagId=' + tag.Id)} tagName={tag.Name} />
            );
        }.bind(this));
        return (
            <div className="container tagContainer">
                <Well>
                    <ButtonToolbar>
                        <Button bsStyle="primary" onClick={this.props.onTagClick.bind(null,'')}>Reset</Button>
                        {tagNodes}
                    </ButtonToolbar>
                </Well>
            </div>
        );
    }
});

var Tag = React.createClass({
    render: function () {
        return (
            <Button className="tag" onClick={this.props.onTagClick}>{this.props.tagName}</Button>
        );
    }
});

var CardContainer = React.createClass({
    render: function () {
        var cardNodes = this.props.cards.map(function (card) {
            return (
                <Card key={card.Id} title={card.Title} summary={card.Summary} date={card.CreatedDate} url={this.props.cardApi + "/" + card.Path} tags={card.Tags} onTagClick={this.props.onTagClick}/>
            );
        }.bind(this));
        return (
            <div className="container cardContainer">
                <Row>
                    {cardNodes}
                </Row>
            </div>
        );
    }
});

var Card = React.createClass({
    render: function () {
        return (
            <Col xs={12} md={6}>
                <div className="card">
                    <a className="card-header" href={this.props.url} >
                        <h3 className="card-header-title">{this.props.title}</h3>
                        <span className="card-header-date">{this.props.date}</span>
                    </a>
                    <div className="card-body">
                        <p>{this.props.summary}</p>
                    </div>
                    <MiniTagContainer tags={this.props.tags} onTagClick={this.props.onTagClick} />
                </div>
            </Col>
        );
    }
});

var MiniTagContainer = React.createClass({
    render: function () {
        var tagNodes = this.props.tags.map(function (tag) {
            return (
                <MiniTag key={tag.Id} onTagClick={this.props.onTagClick.bind(null, '?tagId=' + tag.Id)} tagName={tag.Name} />
            );
        }.bind(this));
        return (
            <div className="container miniTagContainer">
                <ButtonToolbar>
                    {tagNodes}
                </ButtonToolbar>
            </div>
        );
    }
});

var MiniTag = React.createClass({
    render: function () {
        return (
            <Button className="miniTag" bsSize="xsmall" onClick={this.props.onTagClick}>{this.props.tagName}</Button>
        );
    }
});

var PageContainer = React.createClass({
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
            <div className="pageContainer">
                <TagContainer onTagClick={this.handleTagClick} tags={this.state.tags} />
                <CardContainer onTagClick={this.handleTagClick} cards={this.state.cards} cardApi={this.props.cardApi} />
            </div>
        );
    }
});

ReactDOM.render(
    <PageContainer tagApi="api/tags" cardApi ="api/cards" />,
    mountNode
);

