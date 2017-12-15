module.exports = function AutoVanguard(dispatch) {
	dispatch.hook('S_COMPLETE_EVENT_MATCHING_QUEST', event => {
		dispatch.toServer('C_COMPLETE_DAILY_EVENT', { id: event.id })
		return false
	})
}