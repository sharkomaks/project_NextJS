'use client';

import {useContext} from 'react';
import {UserContext} from '@/context/user.context';

function Profile() {

	const {profile} = useContext(UserContext);

	return (
		<div>
			<div>
				{profile && profile.email}
			</div>
			<div>
				{profile && profile.id}
			</div>
			<div>
				{profile && profile.name}
			</div>
			<div>
				{profile && profile.phone}
			</div>
			<div>
				{profile && profile.restoreToken}
			</div>
			<div>
				{profile && profile.address}
			</div>
		</div>
	);
}

export default Profile;