import PropTypes from 'prop-types'

const RepoList = ({ repos }) => {
    return (
        <div className='rounded-lg shadow-lg card bg-base-100'>
            <div className="card-body">
                <h2 className="text-3xl my-4 font-bold card-title">
                    LATEST REPOSITORIES
                </h2>
                { repos.map(repo => {
                    return <div>
                        <h3><a href={ repo.html_url }>{ repo.name }</a></h3>
                        <div>{ repo.description }</div>
                    </div>
                }) }
            </div>
        </div>
    )
}

RepoList.propTypes = {
    repos: PropTypes.array.isRequired
}

export default RepoList