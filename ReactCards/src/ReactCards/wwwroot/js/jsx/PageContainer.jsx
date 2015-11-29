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
                <Tag key={tag.Id} onTagClick={this.props.onTagClick.bind(null, tag.Id)} tagName={tag.Name} />
            );
        }.bind(this));
        return (
            <div className="container tagContainer">
                <Well>
                    <ButtonToolbar>
                        <Button bsStyle="primary" onClick={this.props.onTagClick.bind(null,null)}>Reset</Button>{tagNodes}
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
        var cardDetail = this.props.cardDetail;
        if (cardDetail != null) {
            return (
                <div className="container cardContainer">
                    <Row>
                        <CardDetail title={cardDetail.Title} createdDate={cardDetail.CreatedDate} content={cardDetail.Content} />
                    </Row>
                </div>
            );
        } else {
            var cardNodes = this.props.cards.map(function (card) {
                return (
                    <Card key={card.Id} title={card.Title} summary={card.Summary} createdDate={card.CreatedDate} tags={card.Tags} onTagClick={this.props.onTagClick} onCardClick={this.props.onCardClick.bind(null,card.Id)} />
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
    }
});

var Card = React.createClass({
    render: function () {
        return (
            <Col xs={12} md={6}>
                <div className="card">
                    <div className="card-header clickable" onClick={this.props.onCardClick}>
                        <h3 className="card-header-title">{this.props.title}</h3>
                        <span className="card-header-date">{this.props.createdDate}</span>
                    </div>
                    <div className="card-summary">
                        <p>{this.props.summary}</p>
                    </div>
                    <MiniTagContainer tags={this.props.tags} onTagClick={this.props.onTagClick} />
                </div>
            </Col>
        );
    }
});

var CardDetail = React.createClass({
    render: function () {
        var content = { __html: this.props.content };
        return (
            <Col xs={12}>
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-header-title">{this.props.title}</h3>
                        <span className="card-header-date">{this.props.createdDate}</span>
                    </div>
                    <div className="card-content">
                        <div dangerouslySetInnerHTML={content} />
                    </div>
                </div>
            </Col>
        );
    }
});

var MiniTagContainer = React.createClass({
    render: function () {
        var tagNodes = this.props.tags.map(function (tag) {
            return (
                <MiniTag key={tag.Id} onTagClick={this.props.onTagClick.bind(null, tag.Id)} tagName={tag.Name} />
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
    loadFromServer: function (stateProp, apiUrl) {
        var xhr = new XMLHttpRequest();
        xhr.open("get", apiUrl, true);
        xhr.onload = function () {
            var data = JSON.parse(xhr.responseText);
            var stateObject = function () {
                returnObj = {};
                returnObj[stateProp] = data;
                return returnObj;
            };
            this.setState(stateObject);
        }.bind(this);
        xhr.send();
    },
    getInitialState: function () {
        return {
            cards: [],
            cardDetail: null,
            tags: []
        };
    },
    componentDidMount: function () {
        this.loadFromServer("tags", "api/tags");
        this.loadFromServer("cards", "api/cards");
    },
    handleTagClick: function (tagId) {
        var qry = "";
        if (tagId != null) qry = "?tagId=" + tagId;
        this.setState({ cardDetail: null })
        this.loadFromServer("cards", "api/cards" + qry);
    },
    handleCardClick: function (cardId) {
        var apiUrl = "api/cards/" + cardId;
        this.loadFromServer("cardDetail", apiUrl);
    },
    render: function () {
        return (
            <div className="pageContainer">
                <TagContainer onTagClick={this.handleTagClick} tags={this.state.tags} />
                <CardContainer onTagClick={this.handleTagClick} onCardClick={this.handleCardClick} cards={this.state.cards} cardDetail={this.state.cardDetail} />
            </div>
        );
    }
});

ReactDOM.render(
    <PageContainer />,
    mountNode
);
