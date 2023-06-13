import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

function fetcher<TData, TVariables extends { [key: string]: any }>(client: GraphQLClient, query: string, variables?: TVariables, requestHeaders?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request({
    document: query,
    variables,
    requestHeaders
  });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type AllPaidRoomsResponse = {
  __typename?: 'AllPaidRoomsResponse';
  limit?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  paidRooms?: Maybe<Array<Maybe<Room>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type AllTabsResponse = {
  __typename?: 'AllTabsResponse';
  tabs: Array<Tab>;
  total: Scalars['Int']['output'];
};

export enum AllowedUpdateActions {
  Add = 'ADD',
  Delete = 'DELETE',
  Edit = 'EDIT',
  None = 'NONE'
}

export enum AssignRemoveRole {
  Admin = 'ADMIN',
  Member = 'MEMBER',
  Moderator = 'MODERATOR',
  Owner = 'OWNER'
}

export type AttendeeConcent = {
  __typename?: 'AttendeeConcent';
  raisedAt: Scalars['String']['output'];
  status?: Maybe<AttendeeConcentStatus>;
  user: User;
};

export enum AttendeeConcentStatus {
  Accepted = 'ACCEPTED',
  Declined = 'DECLINED',
  Pending = 'PENDING'
}

export type BadgeInfo = {
  __typename?: 'BadgeInfo';
  badgeName?: Maybe<Scalars['String']['output']>;
  isUnlocked?: Maybe<Scalars['Boolean']['output']>;
  unlockedAt?: Maybe<Scalars['Date']['output']>;
};

export type Balance = {
  __typename?: 'Balance';
  availableBalance?: Maybe<Scalars['Int']['output']>;
  pendingBalance?: Maybe<Scalars['Int']['output']>;
};

export type BlockUserResponse = {
  __typename?: 'BlockUserResponse';
  blockedUserId: Scalars['String']['output'];
  isBlocked: Scalars['Boolean']['output'];
  message: Scalars['String']['output'];
};

export type CommentAndReplyLikes = {
  __typename?: 'CommentAndReplyLikes';
  createdAt: Scalars['Date']['output'];
  likedBy: User;
  updatedAt: Scalars['Date']['output'];
};

export type CommentLikePaginatedResponse = {
  __typename?: 'CommentLikePaginatedResponse';
  activityType?: Maybe<Scalars['String']['output']>;
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  users: Array<CommentAndReplyLikes>;
};

export type CommentsPaginatedResponse = {
  __typename?: 'CommentsPaginatedResponse';
  comments: Array<PostComment>;
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CreatePostMediaPayload = {
  action?: InputMaybe<AllowedUpdateActions>;
  id?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePostPayload = {
  content?: InputMaybe<Scalars['String']['input']>;
  media?: InputMaybe<Array<InputMaybe<CreatePostMediaPayload>>>;
  originalPostId?: InputMaybe<Scalars['String']['input']>;
  postJsonContent?: InputMaybe<Scalars['String']['input']>;
  postType: PostType;
};

export type CurrentUserAction = {
  __typename?: 'CurrentUserAction';
  isInterested: Scalars['Boolean']['output'];
  isLiked: Scalars['Boolean']['output'];
};

export type DeletePaidRoomNotification = {
  __typename?: 'DeletePaidRoomNotification';
  activityCount?: Maybe<Scalars['Int']['output']>;
  activityUsers: Array<User>;
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isWatched: Scalars['Boolean']['output'];
  room: Room;
};

export type DeleteResponse = {
  __typename?: 'DeleteResponse';
  message: Scalars['String']['output'];
};

export type Draft = {
  __typename?: 'Draft';
  content: Scalars['JSON']['output'];
  createdAt: Scalars['String']['output'];
  createdBy: User;
  id: Scalars['ID']['output'];
  type: DraftType;
  updatedAt: Scalars['String']['output'];
};

export type DraftMedia = {
  __typename?: 'DraftMedia';
  id: Scalars['ID']['output'];
  type?: Maybe<MediaTypes>;
  url: Scalars['String']['output'];
};

export enum DraftType {
  Post = 'POST'
}

export type FetchFollowerResponse = {
  __typename?: 'FetchFollowerResponse';
  data: Array<User>;
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FetchSpaceFollowerQuery = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  tagName: Scalars['String']['input'];
};

export type FetchSpaceRoleQuery = {
  filterStatus?: InputMaybe<SpaceRoleFilterStatus>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<SpaceRoles>;
  tagName: Scalars['String']['input'];
};

export type FetchSpaceRoleResponse = {
  __typename?: 'FetchSpaceRoleResponse';
  data: Array<User>;
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type FetchUserFollowedSpaces = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type FollowUserNotification = {
  __typename?: 'FollowUserNotification';
  activityCount?: Maybe<Scalars['Int']['output']>;
  activityUsers: Array<User>;
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isWatched: Scalars['Boolean']['output'];
  user: User;
};

export type GetAllInvitationsResponse = {
  __typename?: 'GetAllInvitationsResponse';
  invitations: Array<InvitationResponse>;
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type GetBadge = {
  __typename?: 'GetBadge';
  badge?: Maybe<Array<Maybe<UserBadge>>>;
  limit?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
};

export enum GetIconType {
  Facebook = 'FACEBOOK',
  Github = 'GITHUB',
  Instagram = 'INSTAGRAM',
  Linkedin = 'LINKEDIN',
  Medium = 'MEDIUM',
  NonSocial = 'NON_SOCIAL',
  Reddit = 'REDDIT',
  Twitter = 'TWITTER',
  Youtube = 'YOUTUBE'
}

export type GetOnboardingLinkResponse = {
  __typename?: 'GetOnboardingLinkResponse';
  accountId: Scalars['String']['output'];
  createdAt: Scalars['String']['output'];
  expiresAt: Scalars['String']['output'];
  onboardingLink: Scalars['String']['output'];
  user?: Maybe<User>;
};

export enum GetPostType {
  Following = 'FOLLOWING',
  Live = 'LIVE',
  LiveAndScheduled = 'LIVE_AND_SCHEDULED',
  PostAndRoom = 'POST_AND_ROOM',
  Scheduled = 'SCHEDULED'
}

export enum GetRoomType {
  All = 'ALL',
  Live = 'LIVE',
  Past = 'PAST',
  Scheduled = 'SCHEDULED'
}

export enum GetSpacePostType {
  Post = 'POST',
  Room = 'ROOM'
}

export type GetUserBankDetailsResponse = {
  __typename?: 'GetUserBankDetailsResponse';
  account_holder_name?: Maybe<Scalars['String']['output']>;
  bank_name?: Maybe<Scalars['String']['output']>;
  last4?: Maybe<Scalars['String']['output']>;
  routing_number?: Maybe<Scalars['String']['output']>;
};

export enum GetUserPostType {
  Post = 'POST',
  Room = 'ROOM'
}

export type InterestAndLikesResponse = {
  __typename?: 'InterestAndLikesResponse';
  lastActionAt: Scalars['String']['output'];
  user: User;
};

export type InvitationResponse = {
  __typename?: 'InvitationResponse';
  id: Scalars['String']['output'];
  role: Scalars['String']['output'];
  senderDetail: User;
  spaces: SpaceResponseForInvitation;
};

export type JoinedUser = {
  __typename?: 'JoinedUser';
  isOnline: Scalars['Boolean']['output'];
  isUserBanned: Scalars['Boolean']['output'];
  joinedAt?: Maybe<Scalars['String']['output']>;
  leftAt?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
  user: User;
};

export type Link = {
  __typename?: 'Link';
  createdAt: Scalars['String']['output'];
  iconType: GetIconType;
  id: Scalars['Int']['output'];
  imageUrl?: Maybe<Scalars['String']['output']>;
  linkType: LinkType;
  title: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  url: Scalars['String']['output'];
};

export enum LinkType {
  FavLink = 'FAV_LINK',
  SocialLinks = 'SOCIAL_LINKS'
}

export type ListTransactionResponse = {
  __typename?: 'ListTransactionResponse';
  limit?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  total?: Maybe<Scalars['Int']['output']>;
  transactions: Array<Transaction>;
};

export type LoungeRoom = {
  __typename?: 'LoungeRoom';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export enum ManageLinkAction {
  Add = 'ADD',
  Delete = 'DELETE'
}

export type ManageLinksPayload = {
  action: ManageLinkAction;
  iconType?: InputMaybe<GetIconType>;
  id?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  linkType?: InputMaybe<LinkType>;
  title?: InputMaybe<Scalars['String']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type ManageSpaceInvitationResponse = {
  __typename?: 'ManageSpaceInvitationResponse';
  id: Scalars['String']['output'];
  message: Scalars['String']['output'];
};

export enum ManageSpaceRoleAction {
  Accepted = 'ACCEPTED',
  Rejected = 'REJECTED'
}

export enum ManageTabsAction {
  Add = 'ADD',
  Delete = 'DELETE',
  Update = 'UPDATE'
}

export type ManageTabsPayload = {
  action: ManageTabsAction;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Media = {
  __typename?: 'Media';
  mediaPages: Array<MediaPage>;
};

export type MediaPage = {
  __typename?: 'MediaPage';
  pageNumber?: Maybe<Scalars['Int']['output']>;
  pageUrl?: Maybe<Scalars['String']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export enum MediaSharedByAction {
  Set = 'SET',
  Unset = 'UNSET'
}

export enum MediaTypes {
  Post = 'POST',
  Space = 'SPACE',
  User = 'USER'
}

export type MediaUpdate = {
  __typename?: 'MediaUpdate';
  isSharing: Scalars['Boolean']['output'];
  mediaSharedBy?: Maybe<Scalars['String']['output']>;
  pageInfo: MediaPage;
};

export type Message = {
  __typename?: 'Message';
  message: Scalars['String']['output'];
};

export type MessageResponse = {
  __typename?: 'MessageResponse';
  message: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  acceptRaiseHand: Room;
  addDraftMedia: Array<DraftMedia>;
  allowGuestUnmute: Room;
  assignOrRemoveSpaceRole: Scalars['String']['output'];
  blockUserAdmin: UserDetails;
  blockUserById: BlockUserResponse;
  cancelRequestForPaidHost: Scalars['String']['output'];
  changeAttendeeConcentStatus: Room;
  changeTabPosition: MessageResponse;
  clearSearchData: Scalars['String']['output'];
  closeRoom: Room;
  createDraft: Draft;
  createPost: Post;
  createPostComment: PostComment;
  createPostCommentReply: PostCommentReply;
  createRoom: Room;
  createSpace: Space;
  createTicket: Ticket;
  deleteDraftByID: DeleteResponse;
  deleteDraftMedia: Scalars['String']['output'];
  deletePost: Post;
  deletePostByAdmin: PostAdmin;
  deletePostComment: PostComment;
  deletePostCommentReply: PostCommentReply;
  deleteRoom: Room;
  deleteRoomByAdmin: RoomAdmin;
  deleteRoomChatMessage: Array<RoomChatMessage>;
  deleteSpace: Scalars['String']['output'];
  deleteTicketByID?: Maybe<DeleteResponse>;
  deleteUser: User;
  deleteUsers: Array<User>;
  followSpace: Space;
  followUser: FollowedAndUnFollowedResponse;
  getOnboardingLink: GetOnboardingLinkResponse;
  handlePaidHostRequest?: Maybe<PaidHostResponse>;
  incrementClickLinkSourceCount: Message;
  joinBotsToRoom: Scalars['String']['output'];
  joinRoom: Room;
  leaveRoom: Room;
  leaveSpace: Scalars['String']['output'];
  likeDislikePost: Post;
  likeDislikePostComment: PostComment;
  likeDislikePostCommentReply: PostCommentReply;
  lowerHand: Room;
  manageLinks: Array<Link>;
  manageSpaceInvitation: ManageSpaceInvitationResponse;
  manageSpaceRoleRequest: Scalars['String']['output'];
  manageTabs: Array<Tab>;
  markRoomInterest: Room;
  mediaUpdate: MediaUpdate;
  mediaUpload: MediaPage;
  muteUnmutePost: Post;
  onboardUser: UserUpdateResponse;
  payRoomTicketFee: Scalars['String']['output'];
  raiseHand: Room;
  refreshToken: SigninResponse;
  refundTicketFee: Scalars['String']['output'];
  reindexSearchData: Scalars['String']['output'];
  removeTaggedPost: Post;
  requestForPaidHost?: Maybe<PaidHostResponse>;
  resendCodeSignup: SignUpResponse;
  resendOTPSignin: SignInWithOtpResponse;
  resendUserVerificationEmail: User;
  resetPassword: Message;
  roomMusicHandling: Room;
  sendRoomChatMessage: Array<RoomChatMessage>;
  sendSpaceInvitation: Scalars['String']['output'];
  sendVerificationCodePhone: Message;
  setMediaSharedBy: MediaUpdate;
  setNotificationSetting: NotificationSetting;
  setNotificationsWatched: Scalars['String']['output'];
  setRoomRecordingStatus: Room;
  setTimezone: User;
  setUserType: Room;
  signin: SigninResponse;
  signup: SignUpResponse;
  spaceRoleRequest: Scalars['String']['output'];
  startAgoraStream: Room;
  startLoungeRoom: RoomAdmin;
  stopLoungeRoom: RoomAdmin;
  stopMediaSharing: MediaUpdate;
  transferPrimaryOwnership: Scalars['String']['output'];
  unblockUserAdmin: UserDetails;
  unfollowSpace: Space;
  unfollowUser: FollowedAndUnFollowedResponse;
  unsubscribeEmailNotifications: Scalars['String']['output'];
  updateDraftByID: Draft;
  updateFifoConfigValue: FifoConfigVariable;
  updatePostV2: Post;
  updateRoom: Room;
  updateSearchSetting: Scalars['String']['output'];
  updateSpace: Space;
  updateTicketByID: Ticket;
  updateUser: UserUpdateResponse;
  updateUserBannedRoomStatus: Room;
  updateUserEmail: User;
  updateUserName: Message;
  verifyCodePhone: VerificationCode;
  verifyPhoneNumber: SigninResponse;
  verifyUserEmail: VerifyUserEmailResponse;
  withdrawInvitation: Scalars['String']['output'];
  withdrawRequest: Scalars['String']['output'];
};


export type MutationAcceptRaiseHandArgs = {
  userId: Scalars['String']['input'];
};


export type MutationAddDraftMediaArgs = {
  media: Array<Scalars['Upload']['input']>;
  type?: InputMaybe<MediaTypes>;
};


export type MutationAllowGuestUnmuteArgs = {
  canGuestUnmute: Scalars['Boolean']['input'];
};


export type MutationAssignOrRemoveSpaceRoleArgs = {
  action: ManageSpaceRoleAction;
  memberId: Scalars['String']['input'];
  role: AssignRemoveRole;
  tagName: Scalars['String']['input'];
};


export type MutationBlockUserAdminArgs = {
  id: Scalars['String']['input'];
};


export type MutationBlockUserByIdArgs = {
  blockedUserId: Scalars['String']['input'];
  isBlocked: Scalars['Boolean']['input'];
};


export type MutationChangeAttendeeConcentStatusArgs = {
  status?: InputMaybe<AttendeeConcentStatus>;
};


export type MutationChangeTabPositionArgs = {
  id: Scalars['String']['input'];
  newOrder: Scalars['Int']['input'];
};


export type MutationClearSearchDataArgs = {
  idx: SearchType;
};


export type MutationCreateDraftArgs = {
  content: Scalars['JSON']['input'];
  type: DraftType;
};


export type MutationCreatePostArgs = {
  childPosts: Array<CreatePostPayload>;
  draftId?: InputMaybe<Scalars['ID']['input']>;
  post: CreatePostPayload;
  spaceId?: InputMaybe<Scalars['String']['input']>;
  tabIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  taggedUserIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  visibility?: InputMaybe<PostVisibility>;
};


export type MutationCreatePostCommentArgs = {
  comment: Scalars['String']['input'];
  postId: Scalars['ID']['input'];
};


export type MutationCreatePostCommentReplyArgs = {
  content: Scalars['String']['input'];
  postCommentId: Scalars['ID']['input'];
};


export type MutationCreateRoomArgs = {
  description: Scalars['String']['input'];
  entryFee?: InputMaybe<Scalars['Int']['input']>;
  entryFeeCurrency?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  sessionId?: InputMaybe<Scalars['String']['input']>;
  spaceId?: InputMaybe<Scalars['String']['input']>;
  startAt?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<PostVisibility>;
};


export type MutationCreateSpaceArgs = {
  coverImage?: InputMaybe<Scalars['String']['input']>;
  coverImageUpload?: InputMaybe<Scalars['Upload']['input']>;
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  profileImage?: InputMaybe<Scalars['Upload']['input']>;
  spaceGuidelines?: InputMaybe<Scalars['String']['input']>;
  spaceType: SpaceType;
  tagName: Scalars['String']['input'];
  topics?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationCreateTicketArgs = {
  description: Scalars['String']['input'];
  media?: InputMaybe<Scalars['Upload']['input']>;
  name: Scalars['String']['input'];
};


export type MutationDeleteDraftByIdArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteDraftMediaArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeletePostArgs = {
  postId: Scalars['ID']['input'];
};


export type MutationDeletePostByAdminArgs = {
  postId: Scalars['String']['input'];
};


export type MutationDeletePostCommentArgs = {
  postCommentId: Scalars['ID']['input'];
};


export type MutationDeletePostCommentReplyArgs = {
  postCommentReplyId: Scalars['ID']['input'];
};


export type MutationDeleteRoomArgs = {
  roomId: Scalars['String']['input'];
};


export type MutationDeleteRoomByAdminArgs = {
  roomId: Scalars['String']['input'];
};


export type MutationDeleteRoomChatMessageArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSpaceArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteTicketByIdArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  verificationCode: Scalars['String']['input'];
};


export type MutationDeleteUsersArgs = {
  password: Scalars['String']['input'];
  phoneNumbers?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationFollowSpaceArgs = {
  spaceId: Scalars['String']['input'];
};


export type MutationFollowUserArgs = {
  followUserId: Scalars['ID']['input'];
};


export type MutationHandlePaidHostRequestArgs = {
  id: Scalars['String']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
  statusResponse: StatusResponseType;
};


export type MutationIncrementClickLinkSourceCountArgs = {
  utmReference?: InputMaybe<Scalars['String']['input']>;
  utmSource?: InputMaybe<Scalars['String']['input']>;
};


export type MutationJoinBotsToRoomArgs = {
  count?: InputMaybe<Scalars['Int']['input']>;
  roomId: Scalars['String']['input'];
};


export type MutationJoinRoomArgs = {
  roomId: Scalars['String']['input'];
  sessionId: Scalars['String']['input'];
};


export type MutationLeaveRoomArgs = {
  nextHostId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationLeaveSpaceArgs = {
  tagName: Scalars['String']['input'];
};


export type MutationLikeDislikePostArgs = {
  isLiked: Scalars['Boolean']['input'];
  postId: Scalars['ID']['input'];
};


export type MutationLikeDislikePostCommentArgs = {
  commentId: Scalars['ID']['input'];
  isLiked?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationLikeDislikePostCommentReplyArgs = {
  isLiked?: InputMaybe<Scalars['Boolean']['input']>;
  replyId: Scalars['ID']['input'];
};


export type MutationManageLinksArgs = {
  links: Array<ManageLinksPayload>;
  spaceId?: InputMaybe<Scalars['String']['input']>;
};


export type MutationManageSpaceInvitationArgs = {
  status: ManageSpaceRoleAction;
  tagName: Scalars['String']['input'];
};


export type MutationManageSpaceRoleRequestArgs = {
  action: ManageSpaceRoleAction;
  memberId: Scalars['String']['input'];
  role: SpaceRequestRole;
  tagName: Scalars['String']['input'];
};


export type MutationManageTabsArgs = {
  spaceId?: InputMaybe<Scalars['String']['input']>;
  tabs: Array<ManageTabsPayload>;
};


export type MutationMarkRoomInterestArgs = {
  isInterestedRoom: Scalars['Boolean']['input'];
  roomId: Scalars['String']['input'];
};


export type MutationMediaUpdateArgs = {
  pageNumber: Scalars['Int']['input'];
};


export type MutationMediaUploadArgs = {
  media: Scalars['Upload']['input'];
  type: Scalars['String']['input'];
};


export type MutationMuteUnmutePostArgs = {
  isMuted: Scalars['Boolean']['input'];
  postId: Scalars['ID']['input'];
};


export type MutationOnboardUserArgs = {
  onboardUser: OnboardUserInput;
};


export type MutationPayRoomTicketFeeArgs = {
  roomId: Scalars['String']['input'];
};


export type MutationRefreshTokenArgs = {
  refreshToken: Scalars['String']['input'];
};


export type MutationRefundTicketFeeArgs = {
  reasonForRefund: Scalars['String']['input'];
  roomId: Scalars['String']['input'];
};


export type MutationReindexSearchDataArgs = {
  idx: SearchType;
};


export type MutationRemoveTaggedPostArgs = {
  postId: Scalars['ID']['input'];
};


export type MutationResendCodeSignupArgs = {
  phoneNumber: Scalars['String']['input'];
};


export type MutationResendOtpSigninArgs = {
  phoneNumber: Scalars['String']['input'];
};


export type MutationResetPasswordArgs = {
  newPassword: Scalars['String']['input'];
  verificationCode: Scalars['String']['input'];
};


export type MutationRoomMusicHandlingArgs = {
  status?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationSendRoomChatMessageArgs = {
  text: Scalars['String']['input'];
};


export type MutationSendSpaceInvitationArgs = {
  role: SpaceInvitationRole;
  spaceId: Scalars['String']['input'];
  users: Array<Scalars['String']['input']>;
};


export type MutationSendVerificationCodePhoneArgs = {
  phoneNumber: Scalars['String']['input'];
};


export type MutationSetMediaSharedByArgs = {
  action: MediaSharedByAction;
  mediaSharedById: Scalars['String']['input'];
};


export type MutationSetNotificationSettingArgs = {
  interval?: InputMaybe<NotificationInterval>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  type: NotificationSettingType;
};


export type MutationSetNotificationsWatchedArgs = {
  highWaterMark: Scalars['Date']['input'];
};


export type MutationSetRoomRecordingStatusArgs = {
  status: RecordingStatus;
};


export type MutationSetTimezoneArgs = {
  userTimeZone: Scalars['String']['input'];
};


export type MutationSetUserTypeArgs = {
  userId: Scalars['String']['input'];
  userType: Scalars['String']['input'];
};


export type MutationSigninArgs = {
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
};


export type MutationSignupArgs = {
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
  referralCode?: InputMaybe<Scalars['String']['input']>;
  referralSource?: InputMaybe<Scalars['String']['input']>;
  token: Scalars['String']['input'];
  userTimeZone: Scalars['String']['input'];
};


export type MutationSpaceRoleRequestArgs = {
  role: SpaceRequestRole;
  tagName: Scalars['String']['input'];
};


export type MutationStartAgoraStreamArgs = {
  canGuestUnmute?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationTransferPrimaryOwnershipArgs = {
  memberId: Scalars['String']['input'];
  tagName: Scalars['String']['input'];
};


export type MutationUnblockUserAdminArgs = {
  id: Scalars['String']['input'];
};


export type MutationUnfollowSpaceArgs = {
  spaceId: Scalars['String']['input'];
};


export type MutationUnfollowUserArgs = {
  unfollowUserId: Scalars['ID']['input'];
};


export type MutationUnsubscribeEmailNotificationsArgs = {
  token: Scalars['String']['input'];
};


export type MutationUpdateDraftByIdArgs = {
  content: Scalars['JSON']['input'];
  id: Scalars['String']['input'];
};


export type MutationUpdateFifoConfigValueArgs = {
  id: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type MutationUpdatePostV2Args = {
  childPosts: Array<UpdatePostPayload>;
  post?: InputMaybe<UpdatePostPayload>;
  postId: Scalars['ID']['input'];
  shouldUpdateTab?: InputMaybe<Scalars['Boolean']['input']>;
  shouldUpdateTag?: InputMaybe<Scalars['Boolean']['input']>;
  spaceId?: InputMaybe<Scalars['String']['input']>;
  tabIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  taggedUserIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  visibility?: InputMaybe<PostVisibility>;
};


export type MutationUpdateRoomArgs = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  spaceId?: InputMaybe<Scalars['String']['input']>;
  startAt?: InputMaybe<Scalars['String']['input']>;
  timezone?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<PostVisibility>;
};


export type MutationUpdateSearchSettingArgs = {
  idx: SearchType;
  settings: Scalars['String']['input'];
};


export type MutationUpdateSpaceArgs = {
  coverImage?: InputMaybe<Scalars['String']['input']>;
  coverImageUpload?: InputMaybe<Scalars['Upload']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  profileImage?: InputMaybe<Scalars['Upload']['input']>;
  spaceGuidelines?: InputMaybe<Scalars['String']['input']>;
  topics?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type MutationUpdateTicketByIdArgs = {
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};


export type MutationUpdateUserArgs = {
  updateUser: UpdateUserInput;
};


export type MutationUpdateUserBannedRoomStatusArgs = {
  status: Scalars['Boolean']['input'];
  userId: Scalars['String']['input'];
};


export type MutationUpdateUserEmailArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdateUserNameArgs = {
  username: Scalars['String']['input'];
};


export type MutationVerifyCodePhoneArgs = {
  code: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
};


export type MutationVerifyPhoneNumberArgs = {
  code: Scalars['String']['input'];
  phoneNumber: Scalars['String']['input'];
};


export type MutationVerifyUserEmailArgs = {
  token: Scalars['String']['input'];
};


export type MutationWithdrawInvitationArgs = {
  spaceId: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationWithdrawRequestArgs = {
  tagName: Scalars['String']['input'];
};

export type Notification = DeletePaidRoomNotification | FollowUserNotification | PaidHostRequestNotification | PaymentNotification | PostCommentLikeNotification | PostCommentNotification | PostCommentReplyLikeNotification | PostCommentReplyNotification | PostLikeNotification | PostQuoteNotification | PostRepostNotification | RefundNotification | RoomStartingNotification | SpaceFollowNotification | SpaceInviteApprovalNotification | SpaceMemberApprovalNotification | SpaceMemberNotification | SpaceModeratorApprovalNotification | SpaceModeratorNotification | TagPostNotification | UpdatePaidRoomNotification;

export enum NotificationInterval {
  Daily = 'daily',
  Weekly = 'weekly'
}

export type NotificationPaginatedResponse = {
  __typename?: 'NotificationPaginatedResponse';
  limit: Scalars['Int']['output'];
  notifications: Array<Notification>;
  offset: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type NotificationSetting = {
  __typename?: 'NotificationSetting';
  createdAt: Scalars['String']['output'];
  interval?: Maybe<NotificationInterval>;
  isActive: Scalars['Boolean']['output'];
  type: NotificationSettingType;
  updatedAt: Scalars['String']['output'];
  user: User;
};

export enum NotificationSettingType {
  FollowUserNotificationSetting = 'FollowUserNotificationSetting',
  RoomStartingNotificationSetting = 'RoomStartingNotificationSetting'
}

export type Onboard = {
  added?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  remove?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type OnlineMessage = {
  __typename?: 'OnlineMessage';
  message: Scalars['String']['output'];
};

export enum OrderByDirType {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type PaidHostRequestNotification = {
  __typename?: 'PaidHostRequestNotification';
  activityCount?: Maybe<Scalars['Int']['output']>;
  activityUsers: Array<User>;
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isWatched: Scalars['Boolean']['output'];
  paidHostResponse: PaidHostResponse;
};

export type PaidHostResponse = {
  __typename?: 'PaidHostResponse';
  id?: Maybe<Scalars['String']['output']>;
  paidHostDetails?: Maybe<UserDetails>;
  reason?: Maybe<Scalars['String']['output']>;
  status?: Maybe<StatusResponseType>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type PaidHostsResponse = {
  __typename?: 'PaidHostsResponse';
  limit?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  paidHosts?: Maybe<Array<Maybe<PaidHostResponse>>>;
  total?: Maybe<Scalars['Int']['output']>;
};

export type PaymentNotification = {
  __typename?: 'PaymentNotification';
  activityCount?: Maybe<Scalars['Int']['output']>;
  activityUsers: Array<User>;
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isWatched: Scalars['Boolean']['output'];
  room: Room;
};

export type PendingRequestCountResponse = {
  __typename?: 'PendingRequestCountResponse';
  member: Scalars['Int']['output'];
  moderator: Scalars['Int']['output'];
};

export type Post = {
  __typename?: 'Post';
  badge?: Maybe<BadgeInfo>;
  childPostCount: Scalars['Int']['output'];
  commentCount: Scalars['Int']['output'];
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Date']['output'];
  createdBy: User;
  deletedAt?: Maybe<Scalars['Date']['output']>;
  editedAt?: Maybe<Scalars['Date']['output']>;
  hasLiked: Scalars['Boolean']['output'];
  hasMuted: Scalars['Boolean']['output'];
  hasThreads: Scalars['Boolean']['output'];
  heading?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  latestComment?: Maybe<PostComment>;
  likeCount: Scalars['Int']['output'];
  media: Array<PostVariableQualityMediaUrl>;
  mediaUrl?: Maybe<Array<Maybe<PostMediaUrl>>>;
  originalPost?: Maybe<Post>;
  parentId?: Maybe<Scalars['ID']['output']>;
  postJsonContent?: Maybe<Scalars['String']['output']>;
  postType: PostType;
  repostCount: Scalars['Int']['output'];
  room?: Maybe<Room>;
  space?: Maybe<Space>;
  streakCountTillBadgeNotExists?: Maybe<Scalars['Int']['output']>;
  tab: Array<Tab>;
  taggedUsers: Array<User>;
  updatedAt: Scalars['Date']['output'];
  userId: Scalars['ID']['output'];
  userRepostId?: Maybe<Scalars['ID']['output']>;
  visibility?: Maybe<Scalars['String']['output']>;
};

export type PostAdmin = {
  __typename?: 'PostAdmin';
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  createdBy: UserDetails;
  deletedAt?: Maybe<Scalars['String']['output']>;
  hasThreads: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  mediaUrl: Array<PostMediaUrl>;
  parentId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
};

export type PostComment = {
  __typename?: 'PostComment';
  comment: Scalars['String']['output'];
  commentedBy: User;
  createdAt: Scalars['Date']['output'];
  deletedAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  isLiked?: Maybe<Scalars['Boolean']['output']>;
  likeCount: Scalars['Int']['output'];
  post: Post;
  postId: Scalars['String']['output'];
  replyCount: Scalars['Int']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type PostCommentLikeNotification = {
  __typename?: 'PostCommentLikeNotification';
  activityCount?: Maybe<Scalars['Int']['output']>;
  activityUsers: Array<User>;
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isWatched: Scalars['Boolean']['output'];
  postComment?: Maybe<PostComment>;
};

export type PostCommentNotification = {
  __typename?: 'PostCommentNotification';
  activityCount?: Maybe<Scalars['Int']['output']>;
  activityUsers: Array<User>;
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isWatched: Scalars['Boolean']['output'];
  post: Post;
};

export type PostCommentReply = {
  __typename?: 'PostCommentReply';
  content: Scalars['String']['output'];
  createdAt: Scalars['Date']['output'];
  deletedAt: Scalars['Date']['output'];
  id: Scalars['ID']['output'];
  isLiked?: Maybe<Scalars['Boolean']['output']>;
  likeCount: Scalars['Int']['output'];
  postComment?: Maybe<PostComment>;
  repliedBy: User;
  updatedAt: Scalars['Date']['output'];
};

export type PostCommentReplyLikeNotification = {
  __typename?: 'PostCommentReplyLikeNotification';
  activityCount?: Maybe<Scalars['Int']['output']>;
  activityUsers: Array<User>;
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isWatched: Scalars['Boolean']['output'];
  postCommentReply?: Maybe<PostCommentReply>;
};

export type PostCommentReplyNotification = {
  __typename?: 'PostCommentReplyNotification';
  activityCount?: Maybe<Scalars['Int']['output']>;
  activityUsers: Array<User>;
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isWatched: Scalars['Boolean']['output'];
  post: Post;
};

export type PostDetails = {
  __typename?: 'PostDetails';
  childPosts: Array<Post>;
  originalPost?: Maybe<Post>;
  post: Post;
};

export type PostLike = {
  __typename?: 'PostLike';
  createdAt: Scalars['Date']['output'];
  likedBy: User;
  updatedAt: Scalars['Date']['output'];
};

export type PostLikeNotification = {
  __typename?: 'PostLikeNotification';
  activityCount?: Maybe<Scalars['Int']['output']>;
  activityUsers: Array<User>;
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isWatched: Scalars['Boolean']['output'];
  post: Post;
};

export type PostLikePaginatedResponse = {
  __typename?: 'PostLikePaginatedResponse';
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  users: Array<PostLike>;
};

export type PostMediaUrl = {
  __typename?: 'PostMediaUrl';
  id: Scalars['ID']['output'];
  sequence?: Maybe<Scalars['Int']['output']>;
  url: Scalars['String']['output'];
};

export type PostPaginatedResponse = {
  __typename?: 'PostPaginatedResponse';
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  posts: Array<Post>;
  recentPostCreatedAtTimestamp: Scalars['String']['output'];
  timestamp: Scalars['String']['output'];
  total: Scalars['Int']['output'];
};

export type PostQuoteNotification = {
  __typename?: 'PostQuoteNotification';
  activityCount?: Maybe<Scalars['Int']['output']>;
  activityUsers: Array<User>;
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isWatched: Scalars['Boolean']['output'];
  post: Post;
};

export type PostRepostNotification = {
  __typename?: 'PostRepostNotification';
  activityCount?: Maybe<Scalars['Int']['output']>;
  activityUsers: Array<User>;
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isWatched: Scalars['Boolean']['output'];
  post: Post;
};

export type PostResult = {
  __typename?: 'PostResult';
  limit: Scalars['Int']['output'];
  maxTotalHits: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  posts: Array<Post>;
  total: Scalars['Int']['output'];
};

export enum PostType {
  QuotePost = 'QUOTE_POST',
  Repost = 'REPOST',
  RoomPost = 'ROOM_POST',
  SimplePost = 'SIMPLE_POST'
}

export type PostVariableQualityMediaUrl = {
  __typename?: 'PostVariableQualityMediaUrl';
  id: Scalars['ID']['output'];
  sequence?: Maybe<Scalars['Int']['output']>;
  url: VariableQualityUrl;
};

export enum PostVisibility {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type PublicRoomPostsPaginationResponse = {
  __typename?: 'PublicRoomPostsPaginationResponse';
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  posts: Array<Post>;
  total: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  ListAllTransactions?: Maybe<ListTransactionResponse>;
  ListRoomTransactions?: Maybe<ListTransactionResponse>;
  checkIfUsernameAlreadyExists?: Maybe<UsernameVerify>;
  checkTagName: TagNameSearchResponse;
  fetchFollowers: SearchResponse;
  fetchFollowing: SearchResponse;
  fetchSpaceFollowers: FetchFollowerResponse;
  getAllDrafts: Array<Draft>;
  getAllInvitations: GetAllInvitationsResponse;
  getAllMySpaces: SpacesPaginatedResponse;
  getAllPaidRooms?: Maybe<AllPaidRoomsResponse>;
  getAllTabs: AllTabsResponse;
  getAllTickets: Array<Ticket>;
  getBlockUserList: Array<User>;
  getCommentAndReplyLikes: CommentLikePaginatedResponse;
  getCommentReplies: RepliesPaginatedResponse;
  getDiscoverSpaces: SpacesPaginatedResponse;
  getDraftByID: Draft;
  getFifoConfig: Array<Maybe<FifoConfigVariable>>;
  getLivePodcasts: Array<Maybe<LivePodcastRoom>>;
  getLoungeRoom: LoungeRoom;
  getMyBadgeInfo?: Maybe<BadgeInfo>;
  getMyBadges?: Maybe<GetBadge>;
  getNotifications: NotificationPaginatedResponse;
  getNotificationsCount: Scalars['Int']['output'];
  getPaidHosts?: Maybe<PaidHostsResponse>;
  getPostComments: CommentsPaginatedResponse;
  getPostDetails: PostDetails;
  getPostLike: PostLikePaginatedResponse;
  getPostRepostAndQuotePostUsers: RepostAndQuotePostUsersPaginatedResponse;
  getPosts: PostPaginatedResponse;
  getPostsBySpace: PostPaginatedResponse;
  getPostsByTabId: TabPostPaginatedResponse;
  getPostsByTaggedIn: TaggedPostPaginatedResponse;
  getPostsByUsername: PostPaginatedResponse;
  getPostsCount: Scalars['Int']['output'];
  getPublicRoomPosts: PublicRoomPostsPaginationResponse;
  getRoomChatMessages: RoomChatPaginatedResponse;
  getRoomMedia: MediaUpdate;
  getRoomPost: PostDetails;
  getSearchSetting: Scalars['String']['output'];
  getSpace: Space;
  getSpaceRole?: Maybe<FetchSpaceRoleResponse>;
  getSpaceTagNamesForMembers: Array<Maybe<Space>>;
  getSpacesByUsername: Array<Maybe<Space>>;
  getStripeBalance?: Maybe<Balance>;
  getTabsByTagname: AllTabsResponse;
  getTabsByUsername: AllTabsResponse;
  getTicketByID: Ticket;
  getTimezone: Timezone;
  getTopSpaces: TopSpacesResponse;
  getTransactionById?: Maybe<Transaction>;
  getUrlMetaData: UrlMetadata;
  getUserByIdBulk: Array<User>;
  getUserByUsername: User;
  getUserFollowSpaces: SpaceSearchResponse;
  getUserFollowSuggestions: Array<User>;
  getUserStripeDetails?: Maybe<UserStripeResponse>;
  me: User;
  postSearch: PostSearchResponse;
  roomSearch: RoomSearchResponse;
  searchQuery: SearchedResult;
  searchUser: SearchUserResponse;
  spaceSearch: SpaceSearchResponse;
  userSearch: UserSearchResponse;
};


export type QueryListAllTransactionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderByColumn?: InputMaybe<Scalars['String']['input']>;
  orderByDir?: InputMaybe<OrderByDirType>;
  status?: InputMaybe<TransactionStatus>;
  type?: InputMaybe<TransactionType>;
};


export type QueryListRoomTransactionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderByColumn?: InputMaybe<Scalars['String']['input']>;
  orderByDir?: InputMaybe<OrderByDirType>;
  roomId: Scalars['String']['input'];
  status?: InputMaybe<TransactionStatus>;
  type?: InputMaybe<TransactionType>;
};


export type QueryCheckIfUsernameAlreadyExistsArgs = {
  username: Scalars['String']['input'];
};


export type QueryCheckTagNameArgs = {
  tagName: Scalars['String']['input'];
};


export type QueryFetchFollowersArgs = {
  searchQuery: SearchInput;
};


export type QueryFetchFollowingArgs = {
  searchQuery: SearchInput;
};


export type QueryFetchSpaceFollowersArgs = {
  fetchSpaceFollowers: FetchSpaceFollowerQuery;
};


export type QueryGetAllDraftsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  type: Scalars['String']['input'];
};


export type QueryGetAllInvitationsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAllMySpacesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAllPaidRoomsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetAllTicketsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetCommentAndReplyLikesArgs = {
  commentId: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetCommentRepliesArgs = {
  commentId: Scalars['String']['input'];
  fetchUserLikeStatus?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetDiscoverSpacesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetDraftByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetMyBadgeInfoArgs = {
  badgeName: Scalars['String']['input'];
};


export type QueryGetMyBadgesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetNotificationsArgs = {
  isWatched?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetNotificationsCountArgs = {
  isWatched?: InputMaybe<Scalars['Boolean']['input']>;
  type?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryGetPaidHostsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetPostCommentsArgs = {
  fetchUserLikeStatus?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  postId: Scalars['String']['input'];
};


export type QueryGetPostDetailsArgs = {
  postId: Scalars['String']['input'];
};


export type QueryGetPostLikeArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  postId: Scalars['String']['input'];
};


export type QueryGetPostRepostAndQuotePostUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  postId: Scalars['String']['input'];
};


export type QueryGetPostsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  timestamp?: InputMaybe<Scalars['String']['input']>;
  type: GetPostType;
};


export type QueryGetPostsBySpaceArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  tagName: Scalars['String']['input'];
  type: GetSpacePostType;
};


export type QueryGetPostsByTabIdArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  tabId: Scalars['String']['input'];
};


export type QueryGetPostsByTaggedInArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  username: Scalars['String']['input'];
};


export type QueryGetPostsByUsernameArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  postId?: InputMaybe<Scalars['String']['input']>;
  type: GetUserPostType;
  username: Scalars['String']['input'];
};


export type QueryGetPostsCountArgs = {
  timestamp: Scalars['String']['input'];
  type: GetPostType;
};


export type QueryGetPublicRoomPostsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  type: GetRoomType;
};


export type QueryGetRoomChatMessagesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  timestamp?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetRoomPostArgs = {
  roomId: Scalars['String']['input'];
};


export type QueryGetSearchSettingArgs = {
  idx: SearchType;
};


export type QueryGetSpaceArgs = {
  tagName: Scalars['String']['input'];
};


export type QueryGetSpaceRoleArgs = {
  fetchSpaceRoleQuery: FetchSpaceRoleQuery;
};


export type QueryGetSpaceTagNamesForMembersArgs = {
  tagName: Scalars['String']['input'];
};


export type QueryGetSpacesByUsernameArgs = {
  username: Scalars['String']['input'];
};


export type QueryGetTabsByTagnameArgs = {
  tagName: Scalars['String']['input'];
};


export type QueryGetTabsByUsernameArgs = {
  username: Scalars['String']['input'];
};


export type QueryGetTicketByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetTopSpacesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryGetTransactionByIdArgs = {
  id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetUrlMetaDataArgs = {
  url: Scalars['String']['input'];
};


export type QueryGetUserByIdBulkArgs = {
  userIds?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryGetUserByUsernameArgs = {
  username: Scalars['String']['input'];
};


export type QueryGetUserFollowSpacesArgs = {
  followedSpaceQuery: FetchUserFollowedSpaces;
};


export type QueryGetUserFollowSuggestionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryPostSearchArgs = {
  postSearchQuery: SearchPostInput;
};


export type QueryRoomSearchArgs = {
  roomSearchQuery: SearchRoomInput;
};


export type QuerySearchQueryArgs = {
  areaOfInterests?: InputMaybe<Array<InputMaybe<AreaOfInterestsInput>>>;
  keywords?: InputMaybe<Scalars['String']['input']>;
};


export type QuerySearchUserArgs = {
  key: Scalars['String']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerySpaceSearchArgs = {
  spaceSearchQuery: SearchSpaceInput;
};


export type QueryUserSearchArgs = {
  userSearchQuery: SearchUsersInput;
};

export type RaisedHand = {
  __typename?: 'RaisedHand';
  raisedAt: Scalars['String']['output'];
  status: Scalars['String']['output'];
  user: User;
};

export enum RecordingStatus {
  RecordingOff = 'RECORDING_OFF',
  RecordingOn = 'RECORDING_ON',
  RecordingPause = 'RECORDING_PAUSE'
}

export enum ReferenceType {
  Space = 'SPACE',
  User = 'USER'
}

export type RefundNotification = {
  __typename?: 'RefundNotification';
  activityCount?: Maybe<Scalars['Int']['output']>;
  activityUsers: Array<User>;
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isWatched: Scalars['Boolean']['output'];
  room: Room;
};

export type RepliesPaginatedResponse = {
  __typename?: 'RepliesPaginatedResponse';
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  replies: Array<PostCommentReply>;
  total: Scalars['Int']['output'];
};

export type RepostAndQuotePostUsers = {
  __typename?: 'RepostAndQuotePostUsers';
  content?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Date']['output'];
  id?: Maybe<Scalars['ID']['output']>;
  originalPost?: Maybe<Post>;
  originalPostId?: Maybe<Scalars['String']['output']>;
  postType: PostType;
  repostedBy: User;
  updatedAt: Scalars['Date']['output'];
};

export type RepostAndQuotePostUsersPaginatedResponse = {
  __typename?: 'RepostAndQuotePostUsersPaginatedResponse';
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  users: Array<RepostAndQuotePostUsers>;
};

export type Room = {
  __typename?: 'Room';
  agoraToken?: Maybe<Scalars['String']['output']>;
  canGuestUnmute?: Maybe<Scalars['Boolean']['output']>;
  createdAt: Scalars['String']['output'];
  createdBy: User;
  deletedAt?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  entryFee?: Maybe<Scalars['Int']['output']>;
  entryFeeCurrency?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isAgoraStreamStarted: Scalars['Boolean']['output'];
  isInterested: Scalars['Boolean']['output'];
  isMusicOn: Scalars['Boolean']['output'];
  isPodcast?: Maybe<Scalars['Boolean']['output']>;
  isRoomStarted?: Maybe<Scalars['Boolean']['output']>;
  isUserPresentInRoom: Scalars['Boolean']['output'];
  joinedUsers: Array<RoomSummaryUser>;
  name: Scalars['String']['output'];
  paymentStatus?: Maybe<TransactionStatus>;
  podcastDuration?: Maybe<Scalars['Int']['output']>;
  podcastEpisodeId?: Maybe<Scalars['Int']['output']>;
  podcastId?: Maybe<Scalars['String']['output']>;
  podcastLink?: Maybe<Scalars['String']['output']>;
  post: Post;
  priceId?: Maybe<Scalars['String']['output']>;
  productId?: Maybe<Scalars['String']['output']>;
  recordingStatus?: Maybe<RecordingStatus>;
  refundStatus?: Maybe<TransactionStatus>;
  roomSessionId?: Maybe<Scalars['String']['output']>;
  roomTerminatedReason?: Maybe<Scalars['String']['output']>;
  roomType: RoomTypes;
  roomWillCloseAt?: Maybe<Scalars['Date']['output']>;
  startAt?: Maybe<Scalars['String']['output']>;
  timezone?: Maybe<Scalars['String']['output']>;
  totalUserCount: Scalars['Int']['output'];
};

export type RoomAdmin = {
  __typename?: 'RoomAdmin';
  agoraStreamStartedAt?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  createdBy: UserDetails;
  deletedAt?: Maybe<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  startAt?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
  url?: Maybe<Scalars['String']['output']>;
};

export type RoomChatMessage = {
  __typename?: 'RoomChatMessage';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isDeleted?: Maybe<Scalars['Boolean']['output']>;
  textMessage?: Maybe<Scalars['String']['output']>;
  type: RoomChatMessageType;
  updatedAt: Scalars['String']['output'];
  user: User;
  userId: Scalars['ID']['output'];
};

export enum RoomChatMessageType {
  LowerHand = 'LOWER_HAND',
  RaiseHand = 'RAISE_HAND',
  Text = 'TEXT'
}

export type RoomChatPaginatedResponse = {
  __typename?: 'RoomChatPaginatedResponse';
  data: Array<RoomChatMessage>;
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type RoomResult = {
  __typename?: 'RoomResult';
  limit: Scalars['Int']['output'];
  maxTotalHits: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  rooms: Array<Room>;
  total: Scalars['Int']['output'];
};

export type RoomStartingNotification = {
  __typename?: 'RoomStartingNotification';
  activityCount?: Maybe<Scalars['Int']['output']>;
  activityUsers: Array<User>;
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isWatched: Scalars['Boolean']['output'];
  room: Room;
};

export type RoomSummary = {
  __typename?: 'RoomSummary';
  closedAt?: Maybe<Scalars['Date']['output']>;
  deletedAt?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ID']['output'];
  isRoomStarted?: Maybe<Scalars['Boolean']['output']>;
  joinedUsers: Array<RoomSummaryUser>;
  totalUserCount: Scalars['Int']['output'];
};

export type RoomSummaryUser = {
  __typename?: 'RoomSummaryUser';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  profileImage?: Maybe<VariableQualityImage>;
  profileImageUrl?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
};

export enum RoomTypes {
  Instant = 'INSTANT',
  Lounge = 'LOUNGE',
  Podcast = 'PODCAST',
  Scheduled = 'SCHEDULED'
}

export type SearchInput = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type SearchPostInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  endTimeStamp?: InputMaybe<Scalars['String']['input']>;
  hasThreads?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  parentId?: InputMaybe<Scalars['String']['input']>;
  showDeletedPosts?: InputMaybe<Scalars['Boolean']['input']>;
  startTimeStamp?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type SearchResponse = {
  __typename?: 'SearchResponse';
  data: Array<User>;
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SearchRoomInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  isActiveRoom?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  scheduleEndTimeStamp?: InputMaybe<Scalars['String']['input']>;
  scheduleStartTime?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type SearchSpaceInput = {
  endTimeStamp?: InputMaybe<Scalars['String']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  spaceType?: InputMaybe<SpaceType>;
  startTimeStamp?: InputMaybe<Scalars['String']['input']>;
  tagName?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};

export type SearchUserResponse = {
  __typename?: 'SearchUserResponse';
  total: Scalars['Int']['output'];
  users: Array<User>;
};

export type SearchUsersInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  endTimeStamp?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isReferred?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  referralCode?: InputMaybe<Scalars['String']['input']>;
  referralSource?: InputMaybe<Scalars['String']['input']>;
  startTimeStamp?: InputMaybe<Scalars['String']['input']>;
};

export type SignInWithOtpResponse = {
  __typename?: 'SignInWithOTPResponse';
  message: Scalars['String']['output'];
};

export type SignUpResponse = {
  __typename?: 'SignUpResponse';
  message: Scalars['String']['output'];
};

export type Space = {
  __typename?: 'Space';
  coverImage?: Maybe<VariableQualityUrl>;
  coverImageUrl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['String']['output'];
  createdBy: User;
  currentUserMemberStatus: SpaceMemberStatus;
  description?: Maybe<Scalars['String']['output']>;
  followersCount: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  isFollowingSpace: Scalars['Boolean']['output'];
  links: Array<Link>;
  name: Scalars['String']['output'];
  pendingRequestCount: PendingRequestCountResponse;
  profileImage?: Maybe<VariableQualityUrl>;
  profileImageUrl?: Maybe<Scalars['String']['output']>;
  spaceFollower: Array<User>;
  spaceGuidelines?: Maybe<Scalars['String']['output']>;
  spaceMember: Array<User>;
  spacePostCount: Scalars['Int']['output'];
  spaceTalkCount: Scalars['Int']['output'];
  spaceType: SpaceType;
  tagName: Scalars['String']['output'];
  topics: Array<Maybe<Scalars['String']['output']>>;
  totalMembersCount: Scalars['Int']['output'];
  updatedAt: Scalars['String']['output'];
  userRequestedForRole: Scalars['Boolean']['output'];
};

export type SpaceFollowNotification = {
  __typename?: 'SpaceFollowNotification';
  activityCount?: Maybe<Scalars['Int']['output']>;
  activityUsers: Array<User>;
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isWatched: Scalars['Boolean']['output'];
  space: Space;
};

export enum SpaceInvitationRole {
  Admin = 'ADMIN',
  Member = 'MEMBER',
  Moderator = 'MODERATOR',
  Owner = 'OWNER'
}

export type SpaceInviteApprovalNotification = {
  __typename?: 'SpaceInviteApprovalNotification';
  activityCount?: Maybe<Scalars['Int']['output']>;
  activityUsers: Array<User>;
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isWatched: Scalars['Boolean']['output'];
  space: Space;
};

export type SpaceMemberApprovalNotification = {
  __typename?: 'SpaceMemberApprovalNotification';
  activityCount?: Maybe<Scalars['Int']['output']>;
  activityUsers: Array<User>;
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isWatched: Scalars['Boolean']['output'];
  space: Space;
};

export type SpaceMemberNotification = {
  __typename?: 'SpaceMemberNotification';
  activityCount?: Maybe<Scalars['Int']['output']>;
  activityUsers: Array<User>;
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isWatched: Scalars['Boolean']['output'];
  space: Space;
};

export enum SpaceMemberStatus {
  Admin = 'ADMIN',
  Member = 'MEMBER',
  Moderator = 'MODERATOR',
  NotAMember = 'NOT_A_MEMBER',
  Owner = 'OWNER',
  PrimaryOwner = 'PRIMARY_OWNER'
}

export type SpaceModeratorApprovalNotification = {
  __typename?: 'SpaceModeratorApprovalNotification';
  activityCount?: Maybe<Scalars['Int']['output']>;
  activityUsers: Array<User>;
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isWatched: Scalars['Boolean']['output'];
  space: Space;
};

export type SpaceModeratorNotification = {
  __typename?: 'SpaceModeratorNotification';
  activityCount?: Maybe<Scalars['Int']['output']>;
  activityUsers: Array<User>;
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isWatched: Scalars['Boolean']['output'];
  space: Space;
};

export enum SpaceRequestRole {
  Member = 'MEMBER',
  Moderator = 'MODERATOR'
}

export type SpaceResponseForInvitation = {
  __typename?: 'SpaceResponseForInvitation';
  name: Scalars['String']['output'];
  tagName: Scalars['String']['output'];
};

export type SpaceResult = {
  __typename?: 'SpaceResult';
  limit: Scalars['Int']['output'];
  maxTotalHits: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  spaces: Array<Space>;
  total: Scalars['Int']['output'];
};

export enum SpaceRoleFilterStatus {
  Accepted = 'ACCEPTED',
  Pending = 'PENDING'
}

export enum SpaceRoles {
  Admin = 'ADMIN',
  Member = 'MEMBER',
  Moderator = 'MODERATOR',
  Owner = 'OWNER',
  PrimaryOwner = 'PRIMARY_OWNER'
}

export type SpaceSearchResponse = {
  __typename?: 'SpaceSearchResponse';
  data: Array<Space>;
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum SpaceType {
  Open = 'OPEN',
  Plus = 'PLUS',
  Pro = 'PRO'
}

export type SpacesPaginatedResponse = {
  __typename?: 'SpacesPaginatedResponse';
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  spaces: Array<Space>;
  total: Scalars['Int']['output'];
};

export enum StatusResponseType {
  Accepted = 'ACCEPTED',
  Pending = 'PENDING',
  Rejected = 'REJECTED',
  Revoke = 'REVOKE'
}

export type Subscription = {
  __typename?: 'Subscription';
  newRoomChatMessages: Array<RoomChatMessage>;
  postsUpdated: Post;
};


export type SubscriptionPostsUpdatedArgs = {
  ids: Array<Scalars['ID']['input']>;
};

export type Tab = {
  __typename?: 'Tab';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['String']['output']>;
  referenceId: Scalars['String']['output'];
  referenceType: ReferenceType;
  updatedAt: Scalars['String']['output'];
};

export type TabPostPaginatedResponse = {
  __typename?: 'TabPostPaginatedResponse';
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  posts: Array<Post>;
  total: Scalars['Int']['output'];
};

export type TagPostNotification = {
  __typename?: 'TagPostNotification';
  activityCount?: Maybe<Scalars['Int']['output']>;
  activityUsers: Array<User>;
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isWatched: Scalars['Boolean']['output'];
  post: Post;
};

export type TaggedPostPaginatedResponse = {
  __typename?: 'TaggedPostPaginatedResponse';
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  posts: Array<Post>;
  total: Scalars['Int']['output'];
};

export type Ticket = {
  __typename?: 'Ticket';
  createdAt: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type Timezone = {
  __typename?: 'Timezone';
  userTimeZone: Scalars['String']['output'];
};

export type TokenForRefundResponse = {
  __typename?: 'TokenForRefundResponse';
  expiresIn?: Maybe<Scalars['String']['output']>;
  token?: Maybe<Scalars['String']['output']>;
};

export type TokenSchema = {
  __typename?: 'TokenSchema';
  expiresAt: Scalars['String']['output'];
  expiresIn: Scalars['String']['output'];
  expiresInitialisedTime: Scalars['String']['output'];
  token: Scalars['String']['output'];
};

export type TopSpacesResponse = {
  __typename?: 'TopSpacesResponse';
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  spaces: Array<Space>;
  total: Scalars['Int']['output'];
};

export type Transaction = {
  __typename?: 'Transaction';
  amount?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  orderId?: Maybe<Scalars['String']['output']>;
  paymentId?: Maybe<Scalars['String']['output']>;
  reasonForRefund?: Maybe<Scalars['String']['output']>;
  receiptUrl?: Maybe<Scalars['String']['output']>;
  room?: Maybe<Room>;
  status?: Maybe<TransactionStatus>;
  type?: Maybe<TransactionType>;
  updatedAt: Scalars['String']['output'];
  user?: Maybe<User>;
};

export enum TransactionStatus {
  Failed = 'FAILED',
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  Successful = 'SUCCESSFUL'
}

export enum TransactionType {
  Payment = 'PAYMENT',
  Refund = 'REFUND'
}

export type UpdatePaidRoomNotification = {
  __typename?: 'UpdatePaidRoomNotification';
  activityCount?: Maybe<Scalars['Int']['output']>;
  activityUsers: Array<User>;
  createdAt: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isWatched: Scalars['Boolean']['output'];
  room: Room;
};

export type UpdatePostMediaPayload = {
  action: AllowedUpdateActions;
  id?: InputMaybe<Scalars['ID']['input']>;
  mediaId?: InputMaybe<Scalars['String']['input']>;
  sequence?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdatePostPayload = {
  action: AllowedUpdateActions;
  content?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  media?: InputMaybe<Array<InputMaybe<CreatePostMediaPayload>>>;
  originalPostId?: InputMaybe<Scalars['String']['input']>;
  postJsonContent?: InputMaybe<Scalars['String']['input']>;
  postType?: InputMaybe<PostType>;
};

export type UpdateUserInput = {
  coverImage?: InputMaybe<Scalars['String']['input']>;
  coverImageUpload?: InputMaybe<Scalars['Upload']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  interests?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  profileImage?: InputMaybe<Scalars['Upload']['input']>;
};

export type UrlMetadata = {
  __typename?: 'UrlMetadata';
  description?: Maybe<Scalars['String']['output']>;
  imageUrl?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

export type User = {
  __typename?: 'User';
  checkFollowerStatus: Scalars['Boolean']['output'];
  coverImage?: Maybe<VariableQualityImage>;
  coverImageUrl?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  followedSpacesCount: Scalars['Int']['output'];
  followersCount: Scalars['Int']['output'];
  followingCount: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  interests?: Maybe<Array<Scalars['String']['output']>>;
  isEmailVerified: Scalars['Boolean']['output'];
  isFollowing: Scalars['Boolean']['output'];
  isNumberVerified: Scalars['Boolean']['output'];
  isOnboarded: Scalars['Boolean']['output'];
  isPodcastUser: Scalars['Boolean']['output'];
  links: Array<Link>;
  name?: Maybe<Scalars['String']['output']>;
  notificationSettings: Array<NotificationSetting>;
  paidHost?: Maybe<PaidHostResponse>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  profileImage?: Maybe<VariableQualityImage>;
  profileImageUrl?: Maybe<Scalars['String']['output']>;
  spaceRole?: Maybe<Scalars['String']['output']>;
  streakCountTillBadgeNotExists?: Maybe<Scalars['Int']['output']>;
  tempEmail?: Maybe<Scalars['String']['output']>;
  userTimeZone: Scalars['String']['output'];
  username?: Maybe<Scalars['String']['output']>;
  usernameAttemptLefts?: Maybe<Scalars['Int']['output']>;
};

export type UserBadge = {
  __typename?: 'UserBadge';
  badgeName?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Date']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
};

export type UserDetails = {
  __typename?: 'UserDetails';
  createdAt: Scalars['String']['output'];
  deletedAt?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  interests?: Maybe<Array<Scalars['String']['output']>>;
  isBlockedByAdmin: Scalars['Boolean']['output'];
  isEmailVerified: Scalars['Boolean']['output'];
  isNumberVerified: Scalars['Boolean']['output'];
  isReferred?: Maybe<Scalars['Boolean']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber: Scalars['String']['output'];
  referralCode?: Maybe<Scalars['String']['output']>;
  referralSource?: Maybe<Scalars['String']['output']>;
  userTimeZone?: Maybe<Scalars['String']['output']>;
  username?: Maybe<Scalars['String']['output']>;
  websiteUrl?: Maybe<Scalars['String']['output']>;
};

export type UserOnline = {
  __typename?: 'UserOnline';
  lastOnlineTimestamp: Scalars['String']['output'];
};

export type UserResult = {
  __typename?: 'UserResult';
  limit: Scalars['Int']['output'];
  maxTotalHits: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  users: Array<User>;
};

export type UserStripeResponse = {
  __typename?: 'UserStripeResponse';
  accDisabledReason?: Maybe<Scalars['String']['output']>;
  bank?: Maybe<GetUserBankDetailsResponse>;
  currentlyDue?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  payoutsEnabled?: Maybe<Scalars['Boolean']['output']>;
};

export type UserUpdateResponse = {
  __typename?: 'UserUpdateResponse';
  user: User;
};

export type UsernameVerify = {
  __typename?: 'UsernameVerify';
  isUserNameAlreadyExist: Scalars['Boolean']['output'];
};

export type VariableQualityImage = {
  __typename?: 'VariableQualityImage';
  large?: Maybe<Scalars['String']['output']>;
  medium?: Maybe<Scalars['String']['output']>;
  original?: Maybe<Scalars['String']['output']>;
  small?: Maybe<Scalars['String']['output']>;
};

export type VariableQualityUrl = {
  __typename?: 'VariableQualityUrl';
  large?: Maybe<Scalars['String']['output']>;
  medium?: Maybe<Scalars['String']['output']>;
  original?: Maybe<Scalars['String']['output']>;
  small?: Maybe<Scalars['String']['output']>;
};

export type VerificationCode = {
  __typename?: 'VerificationCode';
  expiresIn: Scalars['String']['output'];
  verificationCode: Scalars['String']['output'];
};

export type AreaOfInterestsInput = {
  interests: Interset;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type FifoConfigVariable = {
  __typename?: 'fifoConfigVariable';
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type FollowedAndUnFollowedResponse = {
  __typename?: 'followedAndUnFollowedResponse';
  affectedUser: User;
  currentUser: User;
};

export enum Interset {
  Post = 'POST',
  Room = 'ROOM',
  Spaces = 'SPACES',
  Top = 'TOP',
  User = 'USER'
}

export type LivePodcastRoom = {
  __typename?: 'livePodcastRoom';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  podcastDuration?: Maybe<Scalars['Int']['output']>;
  podcastEpisodeId?: Maybe<Scalars['Int']['output']>;
  podcastId?: Maybe<Scalars['String']['output']>;
};

export type OnboardUserInput = {
  coverImage?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  interests?: InputMaybe<Array<Scalars['String']['input']>>;
  profileImage?: InputMaybe<Scalars['Upload']['input']>;
};

export type PostSearchResponse = {
  __typename?: 'postSearchResponse';
  data: Array<Maybe<PostAdmin>>;
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type RoomSearchResponse = {
  __typename?: 'roomSearchResponse';
  data: Array<Maybe<RoomAdmin>>;
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum SearchType {
  Post = 'POST',
  Room = 'ROOM',
  Spaces = 'SPACES',
  User = 'USER'
}

export type SearchedResult = {
  __typename?: 'searchedResult';
  postResponse?: Maybe<PostResult>;
  roomResponse?: Maybe<RoomResult>;
  spaceResponse?: Maybe<SpaceResult>;
  userResponse?: Maybe<UserResult>;
};

export type SigninResponse = {
  __typename?: 'signinResponse';
  accessToken?: Maybe<TokenSchema>;
  refreshToken?: Maybe<TokenSchema>;
  user: User;
};

export type SpaceSearchResponse = {
  __typename?: 'spaceSearchResponse';
  data: Array<Maybe<Space>>;
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  total?: Maybe<Scalars['Int']['output']>;
};

export type TagNameSearchResponse = {
  __typename?: 'tagNameSearchResponse';
  exists: Scalars['Boolean']['output'];
  suggestions: Array<Space>;
};

export type UserSearchResponse = {
  __typename?: 'userSearchResponse';
  data: Array<Maybe<UserDetails>>;
  limit: Scalars['Int']['output'];
  offset: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type VerifyUserEmailResponse = {
  __typename?: 'verifyUserEmailResponse';
  isEmailVerified: Scalars['Boolean']['output'];
  message: Scalars['String']['output'];
};

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, name?: string | null, username?: string | null, description?: string | null, email?: string | null, isEmailVerified: boolean, isOnboarded: boolean, phoneNumber?: string | null, tempEmail?: string | null, userTimeZone: string, usernameAttemptLefts?: number | null, profileImage?: { __typename?: 'VariableQualityImage', small?: string | null, medium?: string | null, large?: string | null, original?: string | null } | null } };


export const MeDocument = `
    query Me {
  me {
    id
    name
    username
    description
    profileImage {
      small
      medium
      large
      original
    }
    email
    isEmailVerified
    isOnboarded
    phoneNumber
    tempEmail
    userTimeZone
    usernameAttemptLefts
  }
}
    `;
export const useMeQuery = <
      TData = MeQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: MeQueryVariables,
      options?: UseQueryOptions<MeQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<MeQuery, TError, TData>(
      variables === undefined ? ['Me'] : ['Me', variables],
      fetcher<MeQuery, MeQueryVariables>(client, MeDocument, variables, headers),
      options
    );