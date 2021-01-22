import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  exampleDataSelector,
  fetchingSelector,
} from '../redux/example/selectors';
import { item } from '../redux/example/actions';
import { FullPageLoader } from '../components/molecules/FullPageLoader';

import t from 'typy';

export const ExampleContainer = () => {
  const dispatch = useDispatch()
  const exampleData = useSelector(exampleDataSelector)
  const fetching = useSelector(fetchingSelector)

  useEffect(() => {
    dispatch(item.request())
  }, [dispatch])

  return fetching
    ? <FullPageLoader />
    : (
      <div>
        {exampleData.map((example) => {
          const title = t(exampleData, 'title').safeObject;
          return (
            <>
              <h1>Example Container</h1>
              <br />
              <div className="row">
                <div className="card">
                  <h4 className="card-header">
                    Example Data:
                    </h4>
                  <div className="card-body">
                    <h4 className="card-title">
                      {title}
                    </h4>
                    <p className="card-text">
                      {example.body}
                    </p>
                    <Link
                      to="/exampleComponent"
                      className="btn btn-warning"
                    >
                      Link to Example Component
                    </Link>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
    )
}
