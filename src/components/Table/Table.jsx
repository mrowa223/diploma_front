import React, { useState, useEffect } from 'react';
import './Table.css';
import Dropdown from './Dropdown';
import nestedKeys from '../../utils/nestedKeys';
import api from '../../apis/api';

function Table({ initialData = [], initialItemsPerPage = 10, initialTableName = "", initialTableType = "FriendlyUI", initialEndpoint = "" }) {
	const [tableName, setTableName] = useState(initialTableName);
	const [tableType, setTableType] = useState(initialTableType);
	const [endpoint, setEndpoint] = useState(initialEndpoint);
	const [data, setData] = useState(initialData);
	const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);

	const [totalItems, setTotalItems] = useState(0);
	const [distinctKeys, setDistinctKeys] = useState([]);

	const [currentPage, setCurrentPage] = useState(1);
	const [currentPageView, setCurrentPageView] = useState(1);
	const [sortBy, setSortBy] = useState('');
	const [sortOrder, setSortOrder] = useState('asc');
	const [filters, setFilters] = useState([]);

	const filterOptions = [{ 'title': 'Option 1', 'selected': false }, { 'title': 'Option 2', 'selected': false }, { 'title': 'Option 3', 'selected': false }];

	const totalPages = totalItems / itemsPerPage;

	useEffect(() => {
		console.log(initialData.length, "LOL");
		const fetchData = async () => {
			if (initialData.length > 0) {
				setData(initialData);
				setTotalItems(initialData.length);
			} else {
				const sort = sortBy && sortOrder ? `${sortBy},${sortOrder}` : "";
				//`${initialEndpoint}?page=${currentPage}&size=${itemsPerPage}&sort=${sort}`
				const response = await api("/api" + initialEndpoint, {
					method: "GET",
					withCredentials: true,
					headers: {
						'Content-Type': 'application/json',
					},
				});
				return response;
				//console.log(response, "ASD");
			}
		}
		setData(initialData);
		setTotalItems(initialData.length);
		const result = fetchData();
		

		setItemsPerPage(initialItemsPerPage);
	}, [initialData, totalItems, itemsPerPage, initialItemsPerPage, sortBy, sortOrder, initialEndpoint]);

	useEffect(() => {
		const distinctKeysSet = new Set();
		data.forEach(obj => {
			nestedKeys.getNestedKeys(obj).forEach(key => {
				distinctKeysSet.add(key);
			})
		});
		setDistinctKeys(Array.from(distinctKeysSet));
	}, [data]);

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	const handleSort = (column, order) => {
		if (column == sortBy && order == sortOrder) {
			setSortBy("");
			setSortOrder("");
		} else {
			setSortBy(column);
			setSortOrder(order);
		}
	};

	const arrowDirection = (column) => {
		if (column === sortBy) {
			return (
				<div className="sort-buttons">
					<button
						className={`sort-button ${sortOrder === 'asc' ? 'active' : ''}`}
						onClick={() => handleSort(column, 'asc')}
					>
						<i className={`sort-icon bi ${sortOrder === 'asc' ? 'bi-caret-up-fill' : 'bi-caret-up'}`}></i>
					</button>
					<button
						className={`sort-button ${sortOrder === 'desc' ? 'active' : ''}`}
						onClick={() => handleSort(column, 'desc')}
					>
						<i className={`sort-icon bi ${sortOrder === 'desc' ? 'bi-caret-down-fill' : 'bi-caret-down'}`}></i>
					</button>
				</div>
			);
		}
		return (
			<div className="sort-buttons">
				<button className="sort-button"
					onClick={() => handleSort(column, 'asc')}
				>
					<i className="bi bi-caret-up sort-icon"></i>
				</button>
				<button className="sort-button"
					onClick={() => handleSort(column, 'desc')}
				>
					<i className="bi bi-caret-down sort-icon"></i>
				</button>
			</div>
		);
	};

	const currentData = data;

	if (currentData.length === 0) {
		return <p>No data available.</p>;
	}

	const handleFilter = (column, filters) => {
		setFilters({ 'column': column, 'filters': filters });
	};

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

	return (
		<div className="main">
			<div className="pagination">
				<div className="title">
					<h3>{tableName}</h3>
				</div>
			</div>

			<table>
				<thead>
					<tr>
						{distinctKeys.map(key => (
							<th>
								<div class="th-header">
									<button className="sort-button">{arrowDirection(key)}</button>
									<span class="th-label">{key}</span>
									<Dropdown column="id" options={filterOptions} handleFilter={handleFilter} />
								</div>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{currentData.slice(startIndex, endIndex).map((item, index) => (
						<tr key={index}>
							{distinctKeys.map((key, rowIndex) => {
								const value = nestedKeys.getValueByNestedKey(item, key); // Define value outside of JSX
								return (
									<td key={rowIndex}>
										{/* Check if the value contains newline characters */}
										{value.includes('\\n') ? (
											/* If the value contains newline characters, split it into separate lines */
											value.split('\\n').map((line, index) => (
												<React.Fragment key={index}>
													{/* Render each line within a <div> */}
													<div>{line}</div>
												</React.Fragment>
											))
										) : (
											/* If the value does not contain newline characters, render it as is */
											value + index
										)}
									</td>
								);
							})}
						</tr>
					))}
				</tbody>
			</table>

			<div className="pagination">
				<div className="controls">
					<button
						onClick={() => handlePageChange(1)}
						disabled={currentPage === 1}
					>
						<i class="bi bi-chevron-double-left"></i>
					</button>
					<button
						onClick={() => handlePageChange(currentPage - 1)}
						disabled={currentPage === 1}
					>
						<i class="bi bi-chevron-left"></i>
					</button>

					{/* Display 2-3 page numbers to the left of the input */}
					{Array.from({ length: Math.min(2, currentPage - 1) }, (_, i) => (
						<button
							key={i}
							onClick={() => handlePageChange(currentPage - 1 - i)}
						>
							{currentPage - 1 - i}
						</button>
					)).reverse()}

					<input
						type="number"
						id="inputPage"
						value={currentPage}
						onChange={(e) => {
							const pageNumber = Number(e.target.value);
							if (pageNumber >= 1 && pageNumber <= totalPages) {
								handlePageChange(pageNumber);
							}
						}}
						min="1"
						max={totalPages}
					/>

					{/* Display 2-3 page numbers to the right of the input */}
					{Array.from({ length: Math.min(2, totalPages - currentPage) }, (_, i) => (
						<button
							key={i}
							onClick={() => handlePageChange(currentPage + 1 + i)}
						>
							{currentPage + 1 + i}
						</button>
					))}

					<button
						onClick={() => handlePageChange(currentPage + 1)}
						disabled={currentPage >= totalPages}
					>
						<i class="bi bi-chevron-right"></i>
					</button>
					<button
						onClick={() => handlePageChange(totalPages)}
						disabled={currentPage >= totalPages}
					>
						<i class="bi bi-chevron-double-right"></i>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Table;