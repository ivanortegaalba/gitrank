import React from 'react';
import './PrPreview.css';
import cx from 'classnames';
import { pinItem } from '../helperFunc';
import Badge from '../Badge/Badge';
import Button from '../Button/Button';
import Avatar from '../Avatar/Avatar';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import PrDetails from '../PrDetails/PrDetails';

function PrPreview({ pr, setPinnedItems, className }) {
	const classnames = cx('PrPreview', className);

	function handlePinButton(event) {
		pinItem(event.currentTarget.getAttribute('prid'));
		setPinnedItems(JSON.parse(localStorage.getItem('pinnedItems')));
	}

	function isFavorite(id = 0) {
		return localStorage.getItem('pinnedItems')
			? JSON.parse(localStorage.getItem('pinnedItems')).includes(id)
			: false;
	}

	if (!pr) {
		return null;
	}

	return (
		<div className={classnames}>
			<header className='PrPreview-header'>
				<div className='PrPreview-header-avatar'>
					<Avatar avatarUrl={pr.author.avatarUrl} author={pr.author.login} />
				</div>
				<div className='PrPreview-header-title'>
					<a
						className='PrPreview-header-repo'
						href={pr.repository.url}
						target='_blank'
						rel='noopener noreferrer'
					>
						{pr.repository.nameWithOwner}
					</a>
					<a
						className='PrPreview-header-name'
						href={pr.url}
						target='_blank'
						rel='noopener noreferrer'
					>
						{pr.title}
					</a>
				</div>
				<div className='PrPreview-header-details'>
					<Badge
						className='PrPreview-header-badge'
						type={pr.state}
						emoji={true}
					/>
				</div>
				<div className='PrPreview-header-actions'>
					<CopyToClipboard text={pr.url}>
						<Button icon={'copy'} className={'PrPreview-header-button'} />
					</CopyToClipboard>
					<Button
						icon={'star'}
						onClick={handlePinButton}
						prid={pr.id}
						className={
							isFavorite(pr.id)
								? 'PrPreview-header-button--isFavorite'
								: 'PrPreview-header-button'
						}
					/>
				</div>
			</header>
			<PrDetails pr={pr} />
		</div>
	);
}

export default PrPreview;
